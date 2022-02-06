// the styles.js file use the makeStyle function the set styles.
//then, yoy have to import de useStyle hook FROM the file when you write the styles (this file)
// asign the hook to a variable and access to style like:
//                styles.nameOfObject 

//NOTE: the object name act like a "class name" on normal css
//NOTE:  you can/should make a single styles file for each component


import  { makeStyles } from '@material-ui/core/styles';


export default makeStyles(()=>({ //instant return and return an object ({})
    root:{
        maxWidth: '100%',        
    },
    media: {
        height:'0',
        paddingTop: ' 56.25%' //16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent:'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent: 'space-between',
    },
}))