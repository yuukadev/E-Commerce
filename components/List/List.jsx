import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const List = (props) => {
  const {
    isLoading,
    category,
    selected,
    setSelected,
    sorted,
    setSorted,
    handleChange,
    onChange,
  } = props;
  return (
    <Fragment>
      <div className="w-52">
        <Listbox disabled={isLoading} value={selected} onChange={setSelected}>
          <>
            <div className="mt-1 cusror-pointer relative">
              <Listbox.Button className="relative w-full bg-white border-2 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 hover:border-2 hover:border-logoGreen text-left sm:text-sm">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">All Games</span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="cursor-pointer absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {category.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className="hover:bg-lighterGreen text-gray-900 select-none relative py-2 pl-3 pr-9"
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-logoGreen",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        </Listbox>
      </div>
      <div className="w-52">
        <div className="mt-1">
          <form autoComplete="off" onSubmit={handleChange}>
            <input
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 hover:border-2 hover:border-logoGreen text-left cursor-default sm:text-sm focus:outline-none"
              type="text"
              placeholder="Search for a game..."
              onChange={onChange}
            />
          </form>
        </div>
      </div>
      <div className="w-52">
        <Listbox value={sorted} onChange={setSorted}>
          <>
            <div className="mt-1 relative">
              <Listbox.Button className="cursor-pointer relative w-full bg-white border-2 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 hover:border-2 hover:border-logoGreen text-left sm:text-sm">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">Sort By</span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="cursor-pointer absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  <Listbox.Option className="hover:bg-lighterGreen text-gray-900 select-none relative py-2 pl-3 pr-9">
                    <>
                      <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">
                          Price: Low to High
                        </span>
                      </div>
                    </>
                  </Listbox.Option>
                  <Listbox.Option className="hover:bg-lighterGreen text-gray-900 select-none relative py-2 pl-3 pr-9">
                    <>
                      <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">
                          Price: High To Low
                        </span>
                      </div>
                    </>
                  </Listbox.Option>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        </Listbox>
      </div>
    </Fragment>
  );
};

export default List;
