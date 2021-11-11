import React, { useState } from 'react';

import CustomContextMenu from './customContextMenu';

const Menu = () => {
    const [menuItems, setMenuItems] = useState({
        menu: [
            { id: 0, opt: 'Brazil' },
            { id: 1, opt: 'India' },
            { id: 2, opt: 'USA' },
            { id: 3, opt: 'Germeny' },
            { id: 4, opt: 'South Korea' }
        ]
    })

    return(
        <CustomContextMenu menuItems={menuItems.menu} />
    )
}

export default Menu;