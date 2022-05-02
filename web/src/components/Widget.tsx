import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import Draggable from 'react-draggable';

const { Button, Panel } = Popover;

export function Widget() {
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
    >      
      <Popover className="handle max-w-xs">
        <Panel>
          Olá
        </Panel>
        <Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            Feedback
          </span>
        </Button>
      </Popover>
    </Draggable>
  )
}