import Draggable from 'react-draggable'; // Both at the same time
const DragedComponent = ({children,props}) => {
    const [activeDrags, setActiveDrags] = React.useState(0);
    const [deltaPosition, setDeltaPosition] = React.useState({x: 0, y: 0});

    const onDropAreaMouseEnter = (e) => {
        if (activeDrags) {
            e.target.classList.add('drag-hover');
        }
    };
    const onDropAreaMouseLeave = (e) => {
        e.target.classList.remove('drag-hover');
    };
    const handleDrag = (e, ui) => {
        const {x, y} = deltaPosition;
        const a={
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        };
        setDeltaPosition(a);
        props.setX(deltaPosition.x);
        props.setY(deltaPosition.y);
    };
    const onStart = () => {
        const a=activeDrags+1;
        setActiveDrags(a);

    };

    const onStop = () => {
        const a=activeDrags-1;
        setActiveDrags(a);
    };
    return (
        <Draggable
            defaultPosition={{x: props.posX, y: props.posY}}
            position={null}
            grid={[25, 25]}
            scale={1}
            style={{marginRight:"0",marginLeft:"0"}}
            onStart={onStart}
            onDrag={handleDrag}
            onStop={onStop}>
            <div onMouseEnter={onDropAreaMouseEnter} onMouseLeave={onDropAreaMouseLeave}>
                {children}
            </div>
        </Draggable>
    )
}

export  default DragedComponent;