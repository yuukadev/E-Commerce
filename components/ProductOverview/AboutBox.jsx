import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const AboutBox = ({ product }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(e) {
    setImgUrl(e.target);
    setIsOpen(true);
  }

  return (
    <div className="w-2/4">
      <div className="mt-16">
        <h1 className="uppercase hidden lg:block tracking-widest text-lg mb-3">
          Visuals
        </h1>
        <div>
          <video
            className="w-video hidden lg:block rounded-2xl"
            controls={true}
          >
            <source alt={product.name} src={product.assets[5].url} />
          </video>
          <div className="w-visualImage hidden lg:flex select-none gap-3 mt-5">
            <img
              alt={product.name}
              onClick={openModal}
              className="cursor-pointer rounded-2xl"
              src={product.assets[2].url}
            />
            <img
              alt={product.name}
              onClick={openModal}
              className="cursor-pointer rounded-2xl"
              src={product.assets[3].url}
            />
            <img
              alt={product.name}
              onClick={openModal}
              className="cursor-pointer rounded-2xl"
              src={product.assets[4].url}
            />
            {isOpen ? (
              <>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-xl shadow-xl transition-all">
                            <img className="w-full" src={imgUrl.src} />
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">About Game</h1>
        <p className="text-gray-700 text-md mt-2 mb-2">
          {product.attributes[0].value}
        </p>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">Configurations</h1>
        <div className="flex justify-center items-center gap-10 mb-20">
          <div className="mt-3">
            <h2 className="uppercase tracking-widest text-sm">
              Minimal Configuration
            </h2>
            <p className="mt-2">{product.attributes[1].value}</p>
          </div>
          <div className="mt-3">
            <h2 className="uppercase tracking-widest text-sm">
              Recomended Configuration
            </h2>
            <p className="mt-2">{product.attributes[2].value}</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">Similiar Products</h1>
      </div>
    </div>
  );
};
