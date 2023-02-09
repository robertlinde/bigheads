import { useReducer } from 'react';
import { BigHead, options } from './../dist/index'
import { ArrowDownTrayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import html2canvas from "html2canvas";

function BigHeadEditor() {

  const createSettingsInitialState = () => {
    let settings = {}
    for (let key in options) {
      settings[key] = options[key][Math.floor(Math.random() * options[key].length)]
    }
    return settings
  }

  const ACTIONS = {
    NEXT: 'next',
    PREVIOUS: 'previous',
    RANDOM: 'random'
  }

  const settingsReducer = (settings, action) => {
    const { type, key } = action
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

  const activeReducer = (active, action) => {
    const { type, key } = action
    const optionsKeys = Array.from(Object.keys(options))
    switch (type) {
      case ACTIONS.NEXT:
        return optionsKeys[optionsKeys.indexOf(key) + 1] || optionsKeys[0]
      case ACTIONS.PREVIOUS:
        return optionsKeys[optionsKeys.indexOf(key) - 1] || optionsKeys[optionsKeys.length - 1]
      default:
        throw new Error()
    }
  }

  const [active, dispatchActive] = useReducer(activeReducer, Array.from(Object.keys(options))[0])

  const namingsForDisplay = (word) => (word.charAt(0).toUpperCase() + word.slice(1)).split(/(?=[A-Z])/).join(" ")

  const downloadAvatar = () => {
    var container = document.getElementById("avatar");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "avatar.png";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
    });
  }

  return (
    <div className='p-10 bg-slate-900 text-white flex flex-col items-center justify-center'>
      <div id="avatar">
        <BigHead {...settings} className="h-[60vh] lg:h-[70vh]"></BigHead>
      </div>

      <div className='w-full sm:w-4/5 md:w-3/5 max-w-3xl bg-slate-700 p-4 rounded-lg mt-10 flex flex-col items-center justify-center gap-10'>
        <div className='w-full flex gap-4 justify-between items-center'>
          <button onClick={() => dispatchActive({
            type: ACTIONS.PREVIOUS,
            key: active
          })}>
            <ChevronLeftIcon className='w-12 h-12 hover:bg-slate-600 p-2 rounded-md'></ChevronLeftIcon>
          </button>
          <h2 className='text-3xl'>
            {namingsForDisplay(active)}
          </h2>
          <button onClick={() => dispatchActive({
            type: ACTIONS.NEXT,
            key: active
          })}>
            <ChevronRightIcon className='w-12 h-12 hover:bg-slate-600 p-2 rounded-md'></ChevronRightIcon>
          </button>
        </div>
        <div className='flex gap-2 w-full justify-between items-center text-xl'>
          <button onClick={() => dispatchSetting({
            type: ACTIONS.PREVIOUS,
            key: active
          })}>
            <ChevronLeftIcon className='h-12 w-12 hover:bg-slate-600 p-2 rounded-md'></ChevronLeftIcon>
          </button>
          <p>{typeof settings[active] === 'boolean' ? (settings[active] ? 'Yes' : 'No') : namingsForDisplay(settings[active])}</p>
          <button onClick={() => dispatchSetting({
            type: ACTIONS.NEXT,
            key: active
          })}>
            <ChevronRightIcon className='h-12 w-12 hover:bg-slate-600 p-2 rounded-md'></ChevronRightIcon>
          </button>
        </div>
        <button onClick={downloadAvatar} className="hover:bg-slate-600 p-2 rounded-md gap-2 flex flex-wrap items-center justify-center">
          <ArrowDownTrayIcon className='h-6 w-6'></ArrowDownTrayIcon>
          Download
        </button>
      </div>
    </div>
  );
}

export default BigHeadEditor;
