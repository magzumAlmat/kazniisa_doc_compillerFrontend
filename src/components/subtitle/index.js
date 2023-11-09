import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, Collapse, Card, CardBody
  } from "reactstrap";
  import { useSelector, useDispatch } from "react-redux";
  import { useEffect, useState } from "react";
  import { authorize } from "@/store/slices/authSlice";
  import 'froala-editor/css/froala_style.min.css';
  import 'froala-editor/css/froala_editor.pkgd.min.css';
  import FroalaEditorComponent from 'react-froala-wysiwyg';
  import { Editor } from '@tinymce/tinymce-react';
  import React, { useRef } from 'react';
  import { addTitleAction } from "@/store/slices/authSlice";

  import { templateReplaceValues, fields, newTemplate } from "../testdata";
export default function Subtitle({childCounter}) {
  const dispatch=useDispatch()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showH1, setShowH1] = useState(false);
    const [titleCreate, setTitleCreate] = useState(false);
    const [showComponent, setShowComponent] = useState(true);
    const [titleName,setTitleName ] = useState('');
    // const [arr, setArr] = useState([<Title/>, <Title/>]);
    const [t_number,setT_number]=useState('')
    let [counter,setCounter]=useState(Number(childCounter))

    const handleClickCreate = () => {
        setCounter(counter+1)
        setTitleCreate(true);
    };

    useEffect(() => {
        return () => {
          console.log('Компонент удален');
        };
      }, []);

      const handleComponentClick = () => {
        setShowComponent(false);
      };

      const handleTitleinputChange = async(e) => {
        setIsOpen(false)
        e.stopPropagation();
        console.log('handleclick start',e.target.value);
        setTitleName(e.target.value)

      
      
    };
    const handleClick = async(e) => {
      setIsOpen(false)
      e.stopPropagation();
      console.log(e.target.value)
        const formData = new FormData();
        formData.append('name', titleName);
        formData.append('p_number', counter);
        formData.append('text', text);
        formData.append('TitleId', passedID);
       
      
      

        
        await dispatch(addTitleAction(formData))
      
    };


    const handleClickButtonPlus = (e) => {
        console.log('plus button start')
        setShowH1(true);
    }

    const AccordionExample = () => {
      const [isOpen, setIsOpen] = useState(false);
    }
      const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };


      const editorRef = useRef(null);

      const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }

  
      };

      const onChange=(e) =>{
        const content = e.target.getContent();
        console.log(content);
      }

      return (
        <>
        {titleCreate ? (
          <div className="ms-5">
        <Button style={{ width: '100%' }} color="secondary" onClick={toggleAccordion}>
          <div className="d-flex justify-content-between">
              <div className="justify-content-start">
              {counter} <input  onChange={handleTitleinputChange} type="text" placeholder="введине наименование" />

                  <button onClick={handleClick}className="btn btn-info me-5">save</button>
              </div>
              {titleName}
              
              <div className="justify-content-end">
                  <button onClick={handleClickButtonPlus} className="btn btn-info me-5">+</button>
                  <button className="btn btn-secondary">IN PROGRESS</button>
              </div>
          </div>
          </Button>
      
            {/* <Button style={{ width: '100%' }} color="primary" onClick={toggleAccordion}> */}
                {/* <div className="d-flex justify-content-between">
                    <div className="justify-content-start">
                        3.1.1 <input  onChange={handleimputChange} type="text" placeholder="введине наименование" />

                        <button onClick={handleClick}className="btn btn-info me-5">save</button>
                    </div>
                    {titleName}
                    {counter}
                    <div className="justify-content-end">
                        <button onClick={handleClickButtonPlus} className="btn btn-info me-5">+</button>
                        <button className="btn btn-secondary">IN PROGRESS</button>
                    </div>
                </div> */}
            {/* </Button> */}
            <Collapse isOpen={isOpen}>
                {/* <FroalaEditorComponent tag="textarea" /> */}
                <Editor
                    initialValue={newTemplate}
                    apiKey='rn7c2nhyq6sboqijw5xcm9xtw3dr4koarjjjlyvklnr35u2r'
                    init={{
                    selector: "#tiny",
                    plugins: "link image code table noneditable template hr importcss",
                    menubar: " format table tools",
                    noneditable_noneditable_class: "mceNonEditable myClass",
                    toolbar:
                        "image undo redo | hr | bold italic | alignleft aligncenter alignright | template | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
                    noneditable_regexp: /{{([^}]*)}}/g,
                    height: 500,
                    template_replace_values: templateReplaceValues,
                    template_preview_replace_values: templateReplaceValues,
                    templates: fields,
                    contextmenu: "table",
                    branding: false
                    //skin_url: "/skins",
                    // skin: "TESTSKIN",
                    //content_css: "TESTSKIN"
                    }}
                    onChange={onChange}
                    //outputFormat='text'
                />
                <button onClick={log} >SAVE with dispatch</button>
            </Collapse>
            

            {showH1 && <Subtitle childCounter={counter}/>}
        </div>
        ):(
            <>
            <button onClick={handleClickCreate} className="btn btn-info me-5">+</button>
            </>
        )}
        </>
        
        
    );
  }