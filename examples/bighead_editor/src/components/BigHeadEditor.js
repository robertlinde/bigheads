import { useReducer } from 'react';
import { BigHead, options } from './../dist/index'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

function BigHeadEditor() {
  const createSettingsInitialState = () => {
    let settings = {}
    for (let key in options) {
      settings[key] = options[key][Math.floor(Math.random() * options[key].length)]
    }
    return settings
  }

  createSettingsInitialState()

  const ACTIONS = {
    NEXT: 'next',
    PREVIOUS: 'previous',
    RANDOM: 'random'
  }

  const settingsReducer = (settings, action) => {
    const {type, key} = action
    let currentIndex = options[key].indexOf(settings[key])

    switch (type) {
      case ACTIONS.NEXT:
        return {
          ...settings,
          [key]: currentIndex === options[key].length - 1 ? options[key][0] : options[key][currentIndex + 1]
        };
      case ACTIONS.PREVIOUS:
        return {
          ...settings,
          [key]: currentIndex === 0 ? options[key][options[key].length - 1] : options[key][currentIndex - 1]
        };
      case ACTIONS.RANDOM:
        return {
          ...settings,
          [key]: options[key][Math.floor(Math.random() * options[key].length)]
        }
      default:
        throw new Error()
    }
  }

  const [settings, dispatchSetting] = useReducer(settingsReducer, createSettingsInitialState())

  const CHANGE_ACTIONS = {
    NEXT: 'next',
    PREVIOUS: 'previous'
  }

  const activeReducer = (settings, action) => {
    const {type, key} = action
    const optionsKeys = Array.from(Object.keys(options))
    switch (type) {
      case CHANGE_ACTIONS.NEXT:
        return optionsKeys[optionsKeys.indexOf(key) + 1] || optionsKeys[0]
      case CHANGE_ACTIONS.PREVIOUS:
        return optionsKeys[optionsKeys.indexOf(key) - 1] || optionsKeys[optionsKeys.length - 1]
      default:
        throw new Error()
    }
  }

  const [active, keydispatchActive] = useReducer(activeReducer, Array.from(Object.keys(options))[0])

  const namingsForDisplay = (word) => (word.charAt(0).toUpperCase() + word.slice(1)).split(/(?=[A-Z])/).join(" ")

  return (
    <div className='p-10 bg-slate-900 text-white flex flex-col items-center justify-center'>
      <BigHead {...settings} className="h-[60vh] lg:h-[70vh]"></BigHead>

      <div className='w-full sm:w-4/5 md:w-3/5 max-w-3xl bg-slate-700 p-4 rounded-lg mt-10 flex flex-col items-center justify-center gap-10'>
        <div className='w-full flex gap-4 justify-between items-center'>
          <button onClick={() => keydispatchActive({
            type: CHANGE_ACTIONS.PREVIOUS,
            key: active
          })}>
            <ChevronLeftIcon className='w-8 h-8'></ChevronLeftIcon>
          </button>
          <h2 className='text-3xl'>
            {namingsForDisplay(active)}
          </h2>
          <button onClick={() => keydispatchActive({
            type: CHANGE_ACTIONS.NEXT,
            key: active
          })}>
            <ChevronRightIcon className='w-8 h-8'></ChevronRightIcon>
          </button>
        </div>
        <div className='flex gap-2 w-full justify-between items-center text-xl'>
          <button onClick={() => dispatchSetting({
            type: ACTIONS.PREVIOUS,
            key: active
          })}>
            <ChevronLeftIcon className='h-8 w-8'></ChevronLeftIcon>
          </button>
          <p>{typeof settings[active] === 'boolean' ? (settings[active] ? 'Yes' : 'No') : namingsForDisplay(settings[active])}</p>
          <button onClick={() => dispatchSetting({
            type: ACTIONS.NEXT,
            key: active
          })}>
            <ChevronRightIcon className='h-8 w-8'></ChevronRightIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BigHeadEditor;
