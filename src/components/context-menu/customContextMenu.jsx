import React, {useState, useEffect, useRef, useLayoutEffect, useCallback} from 'react';

import { ReactComponent as Logo } from '../../assets/checkmark.svg';

import './customContextMenu.css'

const CustomContextMenu = ({ menuItems, storyBook }) => {
    const [ contextMenuProps, setContextMenuProps] = useState({
        items: menuItems,
        selected: {},
        visble: false,
        x: 0,
        y: 0
    });

    useEffect(() => {
        document.addEventListener('contextmenu', displayContextMenu);
        document.addEventListener('click', hideContestMenu);

        return () => {
            document.removeEventListener('contextmenu', displayContextMenu);
            document.removeEventListener('click', hideContestMenu);
        };
    },[contextMenuProps]);

    useLayoutEffect(() => {
        if(contextMenuProps.x + targetRef.current?.offsetWidth > window.innerWidth){
            setContextMenuProps({
                ...contextMenuProps, x: contextMenuProps.x - targetRef.current?.offsetWidth
            });
        }
        if(contextMenuProps.y + targetRef.current?.offsetHeight > window.innerHeight){
            setContextMenuProps({
                ...contextMenuProps, y: contextMenuProps.y - targetRef.current?.offsetHeight
            });
        }
    }, [contextMenuProps]);

    const targetRef = useRef();

    const displayContextMenu = useCallback((event) => {
        event.preventDefault();
        const clickX = event.clientX;
        const clickY = event.clientY;

        setContextMenuProps({
            ...contextMenuProps,
            visble: true,
            x: clickX,
            y: clickY
        });
    },[contextMenuProps, setContextMenuProps]);

    const hideContestMenu = useCallback((event) => {
        if(contextMenuProps.visble){
            setContextMenuProps({
                ...contextMenuProps,
                visble: false,
                x: 0,
                y: 0
            })
        }
    },[contextMenuProps, setContextMenuProps]);

    const handleClick = (current) => {
        return contextMenuProps.selected.id === current.id ?
        setContextMenuProps({ ...contextMenuProps, selected: {} }) : 
        setContextMenuProps({ ...contextMenuProps, selected: current }); 
    }

    const myStyle = {
        position: 'absolute',
        top: `${contextMenuProps.y}px`,
        left: `${contextMenuProps.x}px`
    }

    const { visble, selected, items } = contextMenuProps;

    return(
        visble ?
        (
            <div
                ref={targetRef}
                className='custom-context'
                style={myStyle}
                id='customcontext'
            >
                {
                    items.map((item, index, arr) => {
                        return (arr.length - 1 === index) ?
                        (
                            <div
                                key={item.id}
                                className='custom-context-item-last'
                                onClick={(item) => {
                                    handleClick(item);
                                    alert(`${item.opt} is clicked`);
                                }}
                            >
                                {item.opt}
                                {
                                    (selected.id === item.id) ? <Logo className='check-mark' /> : null
                                }
                            </div>
                        ) :
                        (
                            <div
                                key={item.id}
                                className='custom-context-item'
                                onClick={(item) => {
                                    handleClick(item);
                                    alert(`${item.opt} is clicked`);
                                }}
                            >
                                {item.opt}
                                {
                                    selected.id === item.id ? <Logo className='check-mark' /> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        ) : 
        (<div className='empty-context-menu'></div>)
    )
}

export default CustomContextMenu;