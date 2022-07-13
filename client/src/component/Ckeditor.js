import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Ckeditor = ({setWrite_text, Write_text}) => {

  return (
    <>
        <CKEditor
            config={{
                ckfinder: {
                    // Upload the images to the server using the CKFinder QuickUpload command.
                    uploadUrl: 'http://localhost:4000/uploadimg'
                }
            }}
            editor={ ClassicEditor }
            onChange={ ( event, editor ) => {
                // console.log(editor)
                const content = editor.getData();
                setWrite_text({...Write_text, content:content})
            } }
        />
    </>
  )
}

export default Ckeditor;