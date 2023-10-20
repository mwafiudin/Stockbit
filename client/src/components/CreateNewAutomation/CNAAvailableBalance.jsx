import React from "react";

const CNAAvailableBalance = () => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <p className="text-cuanbot-white">Available Balance:</p>
        <span className={`text-cuanbot-green`}>{"15.234164400"}</span>
        <button>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-cuanbot-white bg-cuanbot-green rounded-full p-[1px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -2 18 25"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CNAAvailableBalance;
