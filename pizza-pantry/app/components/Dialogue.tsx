// // components/DialogConfirm.jsx
// import { useRef, useEffect } from 'react';

// interface ConfirmDialogueProps{
//     isOpen : boolean ;
//     onConfirm: () => void;
//     onCancel: () => void;
// }

// const DialogConfirm : React.FC<ConfirmDialogueProps> = ({ 
//   isOpen, 
//   onConfirm, 
//   onCancel 
// }) => {
//   const dialogRef = useRef(null);

//   useEffect(() => {
//     const dialog = dialogRef.current;
//     if (dialog) {
//       if (isOpen) {
//         dialog.showModal();
//       } else {
//         dialog.close();
//       }
//     }
//   }, [isOpen]);

//   const handleConfirm = () => {
//     onConfirm();
//     dialogRef.current?.close();
//   };

//   const handleCancel = () => {
//     onCancel();
//     dialogRef.current?.close();
//   };

//   return (
//     <dialog
//       ref={dialogRef}
//       className="rounded-lg p-6 backdrop:bg-black backdrop:bg-opacity-50"
//       onCancel={handleCancel}
//     >
//       <h2 className="text-xl font-bold mb-2">{title}</h2>
//       <p className="mb-6">{message}</p>
//       <div className="flex justify-end space-x-3">
//         <button
//           onClick={handleCancel}
//           className="px-4 py-2 border rounded hover:bg-gray-50"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleConfirm}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Confirm
//         </button>
//       </div>
//     </dialog>
//   );
// };

// export default DialogConfirm;