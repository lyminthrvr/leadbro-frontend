import { useDragLayer } from 'react-dnd';
import Task from '../Task';
import { useDropTarget } from 'react-dnd/lib/hooks/useDrop/useDropTarget';

const DragPreview = ({ values }) => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor,
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  return isDragging ? (
    <div
      className="preview"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        left: 0,
        top: 0,
      }}
    >
      <Task task={values.find((el) => el.id === item.id)} />
    </div>
  ) : null;
};

export default DragPreview;
