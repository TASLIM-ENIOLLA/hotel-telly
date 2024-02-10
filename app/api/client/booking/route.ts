import { NextRequest } from "next/server";

import { z } from "zod";
import { transporter } from "@/lib/mail-transporter";

export async function POST(request: NextRequest) {
  const nodemailer = require("nodemailer");

  const formData = await request.formData();

  const schema = {
    fullName: z.string(),
    checkInDate: z.coerce.date(),
    checkOutDate: z.coerce.date(),
    comment: z.string().optional(),
    emailAddress: z.string().toLowerCase().email(),
    phoneNumber: z.string().regex(/^\+?[0-9\-?pw\s]+$/i),
  }

  const rawData = {
    comment: formData.get("comment"),
    fullName: formData.get("fullName"),
    phoneNumber: formData.get("phoneNumber"),
    checkInDate: formData.get("checkInDate"),
    checkOutDate: formData.get("checkOutDate"),
    emailAddress: formData.get("emailAddress"),
  }

  const validation = z.object(schema).safeParse(rawData);

  if(validation.success) {
    const reservationNumber = new Date().getTime();
    
    try {
      const mail1: any = await sendReservationMail(transporter, {...rawData, reservationNumber });
      const mail2: any = await sendAcknowledgementMail(transporter, {...rawData, reservationNumber });
   
      return new Response(JSON.stringify({
        data: {
          message: "Reservation made successfully, check your email for reservation information."
        }
      }));
    }
    catch(error) {
      return new Response(JSON.stringify({
        error: {
          message: "Couldn't make reservation at this time, please ensure you're connected to the internet or try again another time."
        }
      }), { status: 403 });
    }    
  }

  return new Response(JSON.stringify({
    error: validation.error
  }), { status: 403 });
}

async function sendReservationMail(transporter: any, props: Record<string, any>) {
  return await transporter.sendMail({
    from: 'Hotel Telly <Electronic Reservation Agent>',
    to: "taslim.eniolla@gmail.com",
    subject: "Reservation from " + props.fullName + ", Reservation Number: " + props.reservationNumber,
    html: `
      <html>
        <head>
          <style>
            * {
              color: inherit;
            }
            table {
              width: 100%;
              max-width: 600px;
              border-collapse: collapse;
            }
            td {
              padding: 10px;
            }
            tr > td::first-child {
              font-weight: bold;
            }
            img {
              display: block;
              padding-bottom: 15px;
            }
          </style>
        </head>
        <body>
          <h1>
            Hotel Telly<br />
            Electronic Reservation Agent
          </h1>
          <table border="1">
            <tr>
              <td>Reservation Number</td>
              <td>${props.reservationNumber}</td>
            </tr>
            <tr>
              <td>Full Name</td>
              <td>${props.fullName}</td>
            </tr>
            <tr>
              <td>Check-in Date</td>
              <td>${new Date(props.checkInDate as string).toDateString()}</td>
            </tr>
            <tr>
              <td>Check-out Date</td>
              <td>${new Date(props.checkOutDate as string).toDateString()}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>${props.phoneNumber}</td>
            </tr>
            <tr>
              <td>Email Address</td>
              <td>${props.emailAddress}</td>
            </tr>
            <tr>
              <td>Comments</td>
              <td>${props.comment || "---"}</td>
            </tr>
          </table>
          <p>
            Kindly visit the property at Tea Berry, Marinette, USA to enjoy great hospitality service. For enquiries call +31 939 777 or +31 454 6233. Alternatively, you can mail our Guest Service Agent at <a href="mailto://info@myhotelwebsite.com">info@myhotelwebsite.com</a>.
          </p>
        </body>
      </html>
    `,
  });
}

async function sendAcknowledgementMail(transporter: any, props: Record<string, any>) {
  return await transporter.sendMail({
    from: 'Hotel Telly <Electronic Reservation Agent>',
    to: props.emailAddress,
    subject: "You made a reservation at Hotel Telly",
    html: `
      <html>
        <head>
          <style>
            * {
              color: inherit;
            }
            table {
              width: 100%;
              max-width: 600px;
              border-collapse: collapse;
            }
            td {
              padding: 10px;
            }
            tr > td::first-child {
              font-weight: bold;
            }
            img {
              display: block;
              padding-bottom: 15px;
            }
          </style>
        </head>
        <body>
          <h1>
            Hi ${props.fullName.split()[0]},<br />
            You made a reservation at Hotel Telly!
          </h1>
          <table border="1">
            <tr>
              <td>Reservation Number</td>
              <td>${props.reservationNumber}</td>
            </tr>
            <tr>
              <td>Full Name</td>
              <td>${props.fullName}</td>
            </tr>
            <tr>
              <td>Check-in Date</td>
              <td>${new Date(props.checkInDate as string).toDateString()}</td>
            </tr>
            <tr>
              <td>Check-out Date</td>
              <td>${new Date(props.checkOutDate as string).toDateString()}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>${props.phoneNumber}</td>
            </tr>
            <tr>
              <td>Email Address</td>
              <td>${props.emailAddress}</td>
            </tr>
            <tr>
              <td>Comments</td>
              <td>${props.comment || "---"}</td>
            </tr>
          </table>
          <h4>
            Kindly visit the property at Tea Berry, Marinette, USA to make payment & enjoy great hospitality service. For enquiries call +31 939 777 or +31 454 6233. Alternatively, you can mail our Guest Service Agent at <a href="mailto://info@myhotelwebsite.com">info@myhotelwebsite.com</a>.
          </h4>
        </body>
      </html>
    `,
  });
}