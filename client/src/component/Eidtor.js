// import { useQuill } from 'react-quilljs';
// import 'quill/dist/quill.snow.css'; 
// import React from 'react'
// import fetch from 'isomorphic-unfetch';

// const Ckeditor = ({setWrite_text,Write_text}) => {

//   const { quill, quillRef} = useQuill();
//   const insertToEditor = (url) => {
//     const range = quill.getSelection();
//     quill.insertEmbed(range.index, 'image', url);
//   };
//   const saveToServer = async (file) => {
//     const body = new FormData();
//     body.append('file', file);

//     const res = await fetch('http://localhost:4000/uploads2', { method: 'POST', body });
//     insertToEditor(res.uploadedImageUrl);
//   };
//   const selectLocalImage = () => {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();

//     input.onchange = () => { 
//       const file = input.files[0];
//       saveToServer(file);
//     };
//   };
  
//   React.useEffect(() => {
    
//     if (quill) {
//       // Add custom handler for Image Upload
//       quill.getModule('toolbar').addHandler('image', selectLocalImage);
//     }
//   }, [quill,selectLocalImage]);

//   React.useEffect(() => {
//     if (quill) {
//       quill.on('text-change', (delta, oldDelta, source) => {
//         console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        
//         setWrite_text({...Write_text, content:quillRef.current.firstChild.innerHTML})
//       });
//     }
//   }, [quill,Write_text,quillRef,setWrite_text]);

//   return (
//     <div style={{ width: 1000, height: 700, marginBottom:50 }}>
//       <div ref={quillRef} />
//     </div>
//   )
// }
// export default Ckeditor




