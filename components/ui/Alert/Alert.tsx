import { type } from "os";
import { useEffect } from "react";

type AlertPropsType = {
  theme: string,
  message: string,
  duration?: number,
  onClose: () => void,
}

export default function Alert({ onClose, theme, message, duration }: AlertPropsType) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const isDurationValid = typeof duration === "number";
      const canClose = typeof onClose === "function";
      
      if(isDurationValid && canClose) {
        onClose();
      }
    }, Number(duration))

    return () => {
      clearTimeout(timeout);
    }
  }, [duration, onClose]);

  function onCloseButtonClick() {
    if(typeof onClose === "function") {
      onClose();
    }
  }

  return (
    <section className="fixed bottom-0 py-10 w-full">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <div style={{backdropFilter: "blur(5px)"}} className={`flex rounded-lg overflow-hidden shadow-lg items-center p-4 mb-4 text-${theme}-800 border-t-4 border-${theme}-300 bg-${theme}-50 dark:text-${theme}-400 dark:bg-gray-800 dark:border-${theme}-800`}>
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div className="ms-3 text-sm font-medium">
              {message}
            </div>
            <button onClick={onCloseButtonClick} type="button" className={`ms-auto -mx-1.5 -my-1.5 bg-${theme}-50 text-${theme}-500 rounded-lg focus:ring-2 focus:ring-${theme}-400 p-1.5 hover:bg-${theme}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-${theme}-400 dark:hover:bg-gray-700`} aria-label="Close">
              <span className="sr-only">Dismiss</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}