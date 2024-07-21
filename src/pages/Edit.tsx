
import { useOutletContext } from 'react-router-dom';
import Form from '../componants/Form'
import { NoteData,Note, Tag } from '../types'

type Props = {

  handleSubmit:(id:string,updateData:NoteData)=>void;
  createTag:(tag:Tag) =>  void;
  availableTags:Tag[];
}

const Edit = ({handleSubmit,createTag,availableTags}:Props) => {

  const note = useOutletContext<Note>();
  return (
    <div className='container py-5 '>
      <h2>Notu Düzenle</h2>
      
  <Form handleSubmit={(updateData)=> handleSubmit(note.id,updateData)}
    availableTags={availableTags}
    
    createTag={createTag}
    markdown={note.markdown}
    title={note.title}
    tags={note.tags}
    />

    </div>
  )
}

export default Edit
