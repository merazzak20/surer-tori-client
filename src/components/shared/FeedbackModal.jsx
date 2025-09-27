import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import UserFeedbackForm from "../../pages/About/AboutComponents/UserFeedbackForm";

function FeedbackModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-xl space-y-4 border border-[#d2ab69]/50 rounded-md bg-zinc-800 p-12">
          <DialogTitle className="inline-block text-4xl md:text-4xl text-[#D2AB69] font-bold mutalis">
            Place A Feedback
          </DialogTitle>

          <UserFeedbackForm></UserFeedbackForm>
          {/* <div className="flex gap-4">
            <button onClick={onClose}>Cancel</button>
            <button onClick={onClose}>Deactivate</button>
          </div> */}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default FeedbackModal;
