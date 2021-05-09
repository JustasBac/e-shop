import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    kortele: {
        height: 400
    },
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        bottom: 0,
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));