import { AppBar, MenuItem, Menu } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react'
import { ToolbarBox } from './styles'

const MenuBar = ({ isAuth, setIsAuth }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory()

    const sendTo = (path) => {
        history.push(path)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseApplication = () => {
        sessionStorage.clear()
        setIsAuth(false)
        sendTo('/')
    }


    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <AppBar>
            <ToolbarBox>
                <svg width="60" height="60" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="34" height="33" rx="5" fill="#7A1FA5"/>
                <rect width="34" height="33" rx="5" fill="url(#paint0_linear)" fill-opacity="0.9"/>
                <path d="M13.5372 29V21.8906H15.8273C16.4555 21.8906 17.0203 22.0338 17.5216 22.3203C18.0229 22.6035 18.4135 23.0055 18.6935 23.5263C18.9767 24.0439 19.1199 24.625 19.1232 25.2695V25.5966C19.1232 26.2477 18.9848 26.832 18.7081 27.3496C18.4347 27.8639 18.0473 28.2675 17.546 28.5605C17.048 28.8502 16.4913 28.9967 15.8761 29H13.5372ZM15.2511 23.2138V27.6816H15.8468C16.3383 27.6816 16.7159 27.5075 16.9796 27.1591C17.2433 26.8076 17.3751 26.2868 17.3751 25.5966V25.289C17.3751 24.6022 17.2433 24.0846 16.9796 23.7363C16.7159 23.388 16.3318 23.2138 15.8273 23.2138H15.2511ZM24.2605 29H19.2995V27.9258L21.5847 25.5234C22.1478 24.8821 22.4294 24.3727 22.4294 23.9951C22.4294 23.6891 22.3627 23.4563 22.2292 23.2968C22.0958 23.1373 21.9021 23.0576 21.6482 23.0576C21.3975 23.0576 21.1941 23.165 21.0378 23.3799C20.8816 23.5914 20.8034 23.8567 20.8034 24.1758H19.1531C19.1531 23.7396 19.2621 23.3375 19.4802 22.9697C19.6983 22.5986 20.001 22.3089 20.3884 22.1006C20.7758 21.8922 21.2087 21.7881 21.6872 21.7881C22.4555 21.7881 23.0463 21.9655 23.4597 22.3203C23.8764 22.6751 24.0847 23.1845 24.0847 23.8486C24.0847 24.1286 24.0326 24.402 23.9284 24.6689C23.8243 24.9326 23.6615 25.2109 23.4402 25.5039C23.2221 25.7936 22.8689 26.1826 22.3806 26.6709L21.4626 27.7304H24.2605V29ZM24.5931 29V21.8906H26.8831C27.5114 21.8906 28.0762 22.0338 28.5775 22.3203C29.0788 22.6035 29.4694 23.0055 29.7493 23.5263C30.0325 24.0439 30.1758 24.625 30.179 25.2695V25.5966C30.179 26.2477 30.0407 26.832 29.764 27.3496C29.4906 27.8639 29.1032 28.2675 28.6019 28.5605C28.1038 28.8502 27.5472 28.9967 26.932 29H24.5931ZM26.307 23.2138V27.6816H26.9027C27.3942 27.6816 27.7718 27.5075 28.0355 27.1591C28.2991 26.8076 28.431 26.2868 28.431 25.5966V25.289C28.431 24.6022 28.2991 24.0846 28.0355 23.7363C27.7718 23.388 27.3877 23.2138 26.8831 23.2138H26.307Z" fill="black"/>
                <defs>
                <linearGradient id="paint0_linear" x1="17" y1="0" x2="17" y2="33" gradientUnits="userSpaceOnUse">
                <stop stop-color="#390938"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>


                    <IconButton 
                        edge="start" color="inherit" aria-label="menu"
                        aria-controls="menu-appbar" aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => sendTo('/perfil')}>Perfil</MenuItem>
                        <MenuItem onClick={() => sendTo('/grupo')}>Grupo</MenuItem>
                        <MenuItem onClick={() => sendTo('/trilha')}>Trilha</MenuItem>
                        <MenuItem onClick={() => sendTo('/desempenho')}>Desempenho</MenuItem>
                        <MenuItem onClick={handleCloseApplication}>Sair</MenuItem>
                    </Menu>
            </ToolbarBox>
        </AppBar>
    )
}

export default MenuBar