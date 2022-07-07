import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckeditor = ({setWrite_text,Write_text}) => {
  return (
    <>
        <CKEditor
            config={{
                ckfinder: {
                    // Upload the images to the server using the CKFinder QuickUpload command.
                    uploadUrl: 'http://localhost:4000/uploads2'
                }
            }}
            editor={ ClassicEditor }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setWrite_text({...Write_text, content:data})
            } }
        />
    </>
  )
}

export default Ckeditor