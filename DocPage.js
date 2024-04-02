
require('ignore-styles');
const React = require('react');
const { useEffect, useRef } = React;
require('./cssofreacts.css');
class DocPage extends React.Component {
  


  render() {

    const styles = {
      container: {
        color: 'blue', // Example: text color
        backgroundColor: 'lightgray', // Background color
        padding: '20px', 
        margin: '20px', 
        fontFamily: 'Arial, sans-serif', // Font family
      },
      header: {
        color: 'green', // Example: different text color for the header
      },
      paragraph: {
        fontSize: '16px', // Text size for the paragraph
      },
      imgstyles:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      anotdiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button:{
        backgroundColor: 'lightblue',
        color: 'black',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        top: '30px',
        right: '50px',
        position:'absolute'
      }

    };
 


    return (
      <div style={styles.container} >
        <h1 style={styles.header}>Who is Dr. Abdulkadir</h1>
        <p style={styles.paragraph}>He is born in 17 March 1961 in Ankara within a middle class family, his wonder for nature and interest for biology was always <br/>  
        a passion for him since his childhood. He graduated from Izmir Ege University Faculty of Medicine in 1993. He completed his specialization in 2005 at the same university. <br/>
        He worked as a specialist in the field of biochemistry and still has been working since that time. He has got married and one child. He is still working actively with same passion of his childhood.<br/>
        He decided to use his extensive experience gained from lab and skills at the digital platform as an online consultancy service and ordered to setup this web platform.<br/>
        His diplome, specialist document and his photo is below. 
        
        
         </p>
         
         <button id="buttoninreact" style={styles.button} > 
         <a href="newformat.html">
          Back</a>
          </button>
      <img src="documentofuni1.jpg" height={600} width={700}></img>
      <img src="documentofuni2.jpg" height={600} width={700}></img>
      <div style={styles.anotdiv}>
        <img id="kadirW" src="kadirgurel.png" style= {styles.imgstyles} height={700} width={700}></img>
      </div>
      </div>
    );
  }
}

module.exports = DocPage;