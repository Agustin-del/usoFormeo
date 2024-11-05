import FormeoEditor from './formeo/src/lib/js/editor'


const options = {
    onSave: () => {
        const formData = editor.formData;
        console.log('Datos del formulario guardados: ', formData);
    }
}

const editor = new FormeoEditor(options, document.querySelector('.formeo-wrap'));

const formData = editor.formData

// const renderer = new FormeoRenderer(options)
// renderer.render(formData)