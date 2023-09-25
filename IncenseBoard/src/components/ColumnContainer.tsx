import TrashIcon from "../icons/TrashIcon";
import { Column, Id } from "../types"

interface Props {
    column: Column;
    deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
    const { column, deleteColumn } = props;
  return (
    <div
    className="
    bg-mainColor
    w-[350px]
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col
    "
    >
        {/* Column Title */}

        
          <div className="
          bg-mainColor
          text-md
          h-[60px]
          cursor-grab
          rounded-md
          rounded-b-none
          p-3
          font-bold
          border-mainColor
          border-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex justify-center items-center bg-mainColor px-2 py-1 text-sm">0</div>
              {column.title}
            </div>
            <button 
            onClick={() => deleteColumn(column.id)}
            className="stroke-gray-500 hover:stroke-white hover:bg-mainColor"><TrashIcon /></button>
        </div>

        

        {/* Column task container  */}
        <div className="flex flex-grow">Content</div>
        {/* Column footer */}
        <div>Footer</div>
        </div>
  )
}

export default ColumnContainer