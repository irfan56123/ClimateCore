// "use client";

// import React, { useState, useEffect } from "react";

// type FormState = {
//   lookingFor: string;
//   pincode: string;
//   name: string;
//   mobile: string;
// };

// type FieldName = keyof FormState;

// export default function MultiStepForm() {
//   const [step, setStep] = useState<number>(1);
//   const [direction, setDirection] = useState<"up" | "down">("up");

//   const [form, setForm] = useState<FormState>({
//     lookingFor: "",
//     pincode: "",
//     name: "",
//     mobile: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const options = ["Myself", "Parents", "Husband", "Wife", "Other"];

//   function update(field: FieldName, value: string) {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: "" }));
//   }

//   // ---------------- VALIDATION ----------------
//   function validateStep(currentStep: number): boolean {
//     const e: Partial<FormState> = {};

//     if (currentStep === 2) {
//       if (!form.pincode) e.pincode = "Pincode is required.";
//       else if (!/^\d{4,6}$/.test(form.pincode))
//         e.pincode = "Enter a valid pincode.";
//     }

//     if (currentStep === 3 && (!form.name || form.name.trim().length < 2))
//       e.name = "Please enter a valid name.";

//     if (currentStep === 4) {
//       if (!form.mobile) e.mobile = "Mobile number required.";
//       else if (form.mobile.length !== 10)
//         e.mobile = "Enter a valid 10-digit number.";
//     }

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   }

//   // ⭐ GLOBAL NEXT WITH FADE + SLIDE UP ANIMATION
//   const next = () => {
//     if (!validateStep(step)) return;

//     setDirection("up");
//     const box = document.getElementById("form-steps");
//     box?.classList.add("fade-out");

//     setTimeout(() => {
//       setStep((s) => s + 1);
//       box?.classList.remove("fade-out");
//     }, 250);
//   };

//   const back = () => {
//     setDirection("down");
//     const box = document.getElementById("form-steps");
//     box?.classList.add("fade-out");

//     setTimeout(() => {
//       setStep((s) => s - 1);
//       box?.classList.remove("fade-out");
//     }, 250);
//   };

//   // ⭐ STEP 1 AUTO NEXT WHEN SELECTED
//   useEffect(() => {
//     if (step === 1 && form.lookingFor !== "") {
//       setDirection("up");
//       const box = document.getElementById("form-steps");
//       box?.classList.add("fade-out");

//       setTimeout(() => {
//         setStep(2);
//         box?.classList.remove("fade-out");
//       }, 250);
//     }
//   }, [form.lookingFor]);

//   // ENTER KEY
//   useEffect(() => {
//     const handleEnter = (e: KeyboardEvent) => {
//       if (e.key === "Enter") {
//         e.preventDefault();
//         if (step < 4) next();
//       }
//     };
//     window.addEventListener("keydown", handleEnter);
//     return () => window.removeEventListener("keydown", handleEnter);
//   }, [step, form]);

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!validateStep(4)) return;

//     setDirection("up");
//     const box = document.getElementById("form-steps");
//     box?.classList.add("fade-out");

//     setTimeout(() => {
//       setStep(5);
//       box?.classList.remove("fade-out");
//     }, 250);
//   };

//   const animationClass = direction === "up" ? "slide-up" : "slide-down";

//   const BlueHeader = ({ text }: { text: string }) => (
//     <div className="bg-[#1f5ca8] text-white text-center py-3 sm:py-4 relative">
//       <p className="text-base sm:text-lg font-medium">{text}</p>
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#1f5ca8] rotate-45"></div>
//     </div>
//   );

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center px-3 pt-8 pb-6 sm:px-4 sm:pt-16 ">
//         <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden mx-2">
//           <BlueHeader
//             text={
//               step === 5
//                 ? "Please enter some information to book an in-store trial"
//                 : "Check if they qualify for an in-store HVAC trial"
//             }
//           />

//           {/* ---------- FORM ---------- */}
//           <form
//             id="form-steps"
//             onSubmit={onSubmit}
//             className={`p-6 sm:p-8 text-center min-h-[420px] ${animationClass}`}
//           >
//             {/* ---------- STEP 1 ---------- */}
//             {step === 1 && (
//               <>
//                 <h2 className="text-md sm:text-2xl font-bold mb-5">
//                   Searching HVACs for
//                 </h2>

//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   {options.map((opt) => (
//                     <button
//                       key={opt}
//                       type="button"
//                       onClick={() => update("lookingFor", opt)}
//                       className={`py-3 sm:py-4 rounded-full border text-base sm:text-lg font-semibold shadow-sm transition-all duration-200 ${
//                         form.lookingFor === opt
//                           ? "bg-[#1f5ca8] text-white scale-[1.05]"
//                           : "bg-white hover:bg-gray-100"
//                       }`}
//                     >
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* ---------- STEP 2 ---------- */}
//             {step === 2 && (
//               <>
//                 <h2 className="text-md sm:text-2xl font-bold mb-5">
//                   Enter your area pincode
//                 </h2>

//                 <input
//                   type="text"
//                   maxLength={6}
//                   value={form.pincode}
//                   onChange={(e) =>
//                     update("pincode", e.target.value.replace(/\D/g, ""))
//                   }
//                   className="w-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg border rounded-full shadow"
//                   placeholder="Pincode"
//                 />

//                 {errors.pincode && (
//                   <p className="text-red-500 mt-2 text-sm">{errors.pincode}</p>
//                 )}

//                 <button
//                   type="button"
//                   onClick={next}
//                   className="w-full bg-[#1f5ca8] text-white py-3 sm:py-4 rounded-full text-lg mt-8"
//                 >
//                   Next
//                 </button>
//               </>
//             )}

//             {/* ---------- STEP 3 ---------- */}
//             {step === 3 && (
//               <>
//                 <h2 className="text-md sm:text-2xl font-bold mb-5">
//                   Enter your name
//                 </h2>

//                 <input
//                   type="text"
//                   value={form.name}
//                   onChange={(e) => update("name", e.target.value)}
//                   className="w-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg border rounded-full shadow"
//                   placeholder="Full name"
//                 />

//                 {errors.name && (
//                   <p className="text-red-500 mt-2 text-sm">{errors.name}</p>
//                 )}

//                 <button
//                   type="button"
//                   onClick={next}
//                   className="w-full bg-[#1f5ca8] text-white py-3 sm:py-4 rounded-full text-lg mt-8"
//                 >
//                   Next
//                 </button>
//               </>
//             )}

//             {/* ---------- STEP 4 ---------- */}
//             {step === 4 && (
//               <>
//                 <h2 className="text-md sm:text-2xl font-bold mb-5">
//                   Enter your phone number
//                 </h2>

//                 <input
//                   type="text"
//                   maxLength={10}
//                   value={form.mobile}
//                   onChange={(e) => {
//                     const v = e.target.value.replace(/\D/g, "");
//                     update("mobile", v);

//                     if (v.length > 0 && v.length < 10) {
//                       setErrors((prev) => ({
//                         ...prev,
//                         mobile: "Enter a valid 10-digit mobile number.",
//                       }));
//                     } else {
//                       setErrors((prev) => ({ ...prev, mobile: "" }));
//                     }
//                   }}
//                   className="w-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg border rounded-full shadow"
//                   placeholder="Mobile Number"
//                 />

//                 {errors.mobile && (
//                   <p className="text-red-500 mt-2 text-sm">{errors.mobile}</p>
//                 )}

//                 <label className="flex items-center justify-center gap-2 mt-4 text-gray-700 text-sm sm:text-base">
//                   <input type="checkbox" defaultChecked className="w-5 h-5" />
//                   Receive appointment details on WhatsApp
//                 </label>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#1f5ca8] text-white py-3 sm:py-4 rounded-full text-lg mt-8"
//                 >
//                   Reserve now
//                 </button>
//               </>
//             )}

//             {/* ---------- STEP 5 ---------- */}
//             {step === 5 && (
//               <div className="text-center py-8 slide-up">
//                 <img
//                   src="/thankyou2.png"
//                   className="w-40 sm:w-48 mx-auto mb-6"
//                 />
//                 <h2 className="text-2xl font-bold mb-3">Congratulations!</h2>
//                 <p className="text-gray-600 text-base sm:text-lg">
//                   They're qualified for the in-store trial
//                 </p>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>

//       {/* ---------- Animation CSS ---------- */}
//       <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .slide-up {
//           animation: slideUp 0.45s ease-out;
//         }

//         .slide-down {
//           animation: slideDown 0.45s ease-out;
//         }

//         .fade-out {
//           opacity: 0;
//           transform: translateY(-15px);
//           transition: all 0.25s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";

type FormState = {
  lookingFor: string;
  pincode: string;
  name: string;
  mobile: string;
};

type FieldName = keyof FormState;

// ⭐ YOUR WEBHOOK URL UPDATED HERE
const WEBHOOK_URL = "https://hkdk.events/98onfupn6vioe0";

export default function MultiStepForm() {
  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormState>({
    lookingFor: "",
    pincode: "",
    name: "",
    mobile: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const options = ["Myself", "Parents", "Husband", "Wife", "Other"];

  function update(field: FieldName, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  // ---------------- VALIDATION ----------------
  function validateStep(stepNum: number): boolean {
    const e: Partial<FormState> = {};

    if (stepNum === 2) {
      if (!form.pincode) e.pincode = "Pincode is required.";
      else if (!/^\d{4,6}$/.test(form.pincode))
        e.pincode = "Enter a valid pincode.";
    }

    if (stepNum === 3 && (!form.name || form.name.trim().length < 2))
      e.name = "Please enter a valid name.";

    if (stepNum === 4) {
      if (!form.mobile) e.mobile = "Mobile number required.";
      else if (form.mobile.length !== 10)
        e.mobile = "Enter a valid 10-digit number.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ⭐ NEXT STEP WITH ANIMATION
  const next = () => {
    if (!validateStep(step)) return;

    setDirection("up");
    const box = document.getElementById("form-steps");
    box?.classList.add("fade-out");

    setTimeout(() => {
      setStep((s) => s + 1);
      box?.classList.remove("fade-out");
    }, 250);
  };

  // ⭐ AUTO MOVE FROM STEP 1 → STEP 2
  useEffect(() => {
    if (step === 1 && form.lookingFor !== "") {
      next();
    }
  }, [form.lookingFor]);

  // ENTER KEY SUPPORT
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter" && step < 4) {
        e.preventDefault();
        next();
      }
    };

    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, [step, form]);

  // ⭐ SUBMIT FORM + SEND TO WEBHOOK
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setSubmitting(true);

    const payload = {
      lookingFor: form.lookingFor,
      pincode: form.pincode,
      name: form.name,
      mobile: form.mobile,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      next(); // Show thank you page
    } catch (error) {
      alert("Failed to submit form. Please try again.");
      console.error("Webhook error:", error);
    }

    setSubmitting(false);
  };

  const animationClass = direction === "up" ? "slide-up" : "slide-down";

  const BlueHeader = ({ text }: { text: string }) => (
    <div className="bg-[#1f5ca8] text-white text-center py-3 sm:py-4 relative">
      <p className="text-base sm:text-lg font-medium">{text}</p>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
      translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#1f5ca8] rotate-45"
      ></div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-3 pt-8 pb-6 sm:px-4 sm:pt-16 sm:pb-10">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden mx-2">
          <BlueHeader
            text={
              step === 5
                ? "Thank you! Your appointment is confirmed"
                : "Check if they qualify for an in-store HVAC trial"
            }
          />

          {/* FORM */}
          <form
            id="form-steps"
            onSubmit={onSubmit}
            className={`p-6 sm:p-8 text-center min-h-[420px] ${animationClass}`}
          >
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2 className="text-xl sm:text-2xl font-bold mb-5">
                  Searching HVACs for
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("lookingFor", opt)}
                      className={`py-3 rounded-full border text-base sm:text-lg font-semibold shadow-sm transition-all duration-200 ${
                        form.lookingFor === opt
                          ? "bg-[#1f5ca8] text-white scale-[1.05]"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h2 className="text-xl sm:text-2xl font-bold mb-5">
                  Enter your area pincode
                </h2>

                <input
                  type="text"
                  maxLength={6}
                  value={form.pincode}
                  onChange={(e) =>
                    update("pincode", e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full px-5 py-3 sm:px-6 sm:py-4 border rounded-full shadow text-base sm:text-lg"
                  placeholder="Pincode"
                />

                {errors.pincode && (
                  <p className="text-red-500 mt-2 text-sm">{errors.pincode}</p>
                )}

                <button
                  type="button"
                  onClick={next}
                  className="w-full bg-[#1f5ca8] text-white py-3 sm:py-4 rounded-full text-lg mt-8"
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h2 className="text-xl sm:text-2xl font-bold mb-5">
                  Enter your name
                </h2>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-5 py-3 sm:px-6 sm:py-4 border rounded-full shadow text-base sm:text-lg"
                  placeholder="Full name"
                />

                {errors.name && (
                  <p className="text-red-500 mt-2 text-sm">{errors.name}</p>
                )}

                <button
                  type="button"
                  onClick={next}
                  className="w-full bg-[#1f5ca8] text-white py-3 sm:py-4 rounded-full text-lg mt-8"
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <h2 className="text-xl sm:text-2xl font-bold mb-5">
                  Enter your phone number
                </h2>

                <input
                  type="text"
                  maxLength={10}
                  value={form.mobile}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "");
                    update("mobile", v);
                    if (v.length > 0 && v.length < 10) {
                      setErrors((prev) => ({
                        ...prev,
                        mobile: "Enter a valid 10-digit mobile number.",
                      }));
                    } else {
                      setErrors((prev) => ({ ...prev, mobile: "" }));
                    }
                  }}
                  className="w-full px-5 py-3 sm:px-6 sm:py-4 border rounded-full shadow text-base sm:text-lg"
                  placeholder="Mobile Number"
                />

                {errors.mobile && (
                  <p className="text-red-500 mt-2 text-sm">{errors.mobile}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1f5ca8] text-white py-3 sm:py-4 rounded-full text-lg mt-8 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Reserve now"}
                </button>
              </>
            )}

            {/* STEP 5 — THANK YOU */}
            {step === 5 && (
              <div className="text-center py-8 slide-up">
                <img
                  src="/thankyou2.png"
                  className="w-40 sm:w-48 mx-auto mb-6"
                />
                <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Your appointment has been successfully booked.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* ---------- Animation CSS ---------- */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-up {
          animation: slideUp 0.45s ease-out;
        }

        .slide-down {
          animation: slideDown 0.45s ease-out;
        }

        .fade-out {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
