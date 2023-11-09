
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, Collapse, Card, CardBody
  } from "reactstrap";
  import Subtitle from '@/components/subtitle'
  import { useSelector, useDispatch } from "react-redux";
  import { useEffect, useState } from "react";
  import { authorize } from "@/store/slices/authSlice";
  import 'froala-editor/css/froala_style.min.css';
  import 'froala-editor/css/froala_editor.pkgd.min.css';
  import FroalaEditorComponent from 'react-froala-wysiwyg';
  import { Editor } from '@tinymce/tinymce-react';
  import React, { useRef } from 'react';
  import { addTitleAction,getAllTitlesAction,getAllTitles,UpdateTitleAction } from "@/store/slices/authSlice";
  import { setCounterReducer } from "@/store/slices/authSlice";
  import { templateReplaceValues, fields, newTemplate } from "../testdata";
  import TreeView from "../treenode";
export default function Title({childCounter}) {
  const dispatch=useDispatch()
  let counterSlice= useSelector((state) => state.auth.titleCounter);
  const allTitles= useSelector((state) => state.auth.allTitles);
  
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showH1, setShowH1] = useState(false);
    const [showH2, setShowH2] = useState(false);
    const [titleCreate, setTitleCreate] = useState(false);
    const [showComponent, setShowComponent] = useState(true);
    const [titleName,setTitleName ] = useState('');
    const [titleNumber,setTitleNumber ] = useState('');
    const [arr, setArr] = useState([<Title/>, <Title/>]);
    const [t_number,setT_number]=useState('')
    let chCounter = Number(childCounter);
    let [counter,setCounter]=useState(0)
    
    let counterclickPlusbutton=0

    let a=[]

    const handleClickCreate = () => {
      
     

      setCounter(counterSlice)
  
      setTitleCreate(true);
      counterclickPlusbutton=counterclickPlusbutton+1
      console.log('handleClickCreate  started  a=',a,' 1.1 counter  =',counter,'counterclickPlusbutton=',counterclickPlusbutton)
        if(Number(counterclickPlusbutton)==Number(counter)){
       
  
          console.log('1.1 counter click =',counter,'counterclickPlusbutton=',counterclickPlusbutton)
  
        }
        else(Number(counterclickPlusbutton)!=Number(counter))
        {
         
          console.log('2 else vetka')  

          setCounter(Number(counter)+1)
         
          console.log('3 counter after click +',counter,'a===',a)
        }
    };

    useEffect(() => {
        return () => {
          dispatch(getAllTitlesAction())
          console.log('Компонент удален');
        };
      }, []);

      const handleComponentClick = () => {
        setShowComponent(false);
      };

      const handleTitleinputChange = async(e) => {
        setIsOpen(false)
        e.stopPropagation();
        // console.log('handleclick start',e.target.value);
        setTitleName(e.target.value)
    };

    const handleTitleAddT_number = async(e) => {
      setIsOpen(false)
      e.stopPropagation();
      // console.log('handleclick start',e.target.value);
      setTitleNumber(e.target.value)


  };
 
    const handleClick = async(e) => {
      setIsOpen(false)
      e.stopPropagation();
        const formData = new FormData();
        formData.append('name', titleName);
        formData.append('t_number', titleNumber);

        await dispatch(addTitleAction(formData))
      
        console.log('1 counter slice',counterSlice)
        // await dispatch((setCounterReducer));
    };

    const updatehandleClick = async(passedData) => {
      console.log('updatehandleClick started',passedData)
      // console.log('handleclick start',e.target.value);
      setIsOpen(false)
      // e.stopPropagation();
        const formData = new FormData();
        formData.append('passedId', passedData);
        formData.append('name', titleName);
        formData.append('t_number', titleNumber);

        await dispatch(UpdateTitleAction(formData))
      
        console.log('1 counter slice',counterSlice)
        alert('Вы изменили ',titleName)
        // await dispatch((setCounterReducer));
    };

    useEffect(()=>{
        setCounter(counterSlice)
        
        // dispatch(getAllTitles())

    },[counterSlice,allTitles,dispatch])


    const handleClickButtonPlus = (e) => {
        // console.log('plus button start')
        setShowH1(true);
    }
    const handleClickButtonCreateTitle = (e) => {
      
      // console.log('conter========',counter)
      // console.log('Child counter=====', chCounter)
      
      // console.log('conter after increment========',counter)
      // console.log('TitleCounter from slice = ', counter)
      // console.log('plus button start');
      setShowH2(true);
    
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



      // useEffect(()=>{
      //   dispatch(getAllTitlesAction())
      // },[allTitles])
      
      
      // console.log('ALL TITLES=',allTitles)
  
      return (
        <>
         
        {titleCreate ? (
          
        <div>
        <Button style={{ width: '100%' }} color="dark" onClick={toggleAccordion}>
        
          <div className="d-flex justify-content-between">
              <div className="justify-content-start">
             
              {/* {showH2 && Number(counter)+1} */}
              <input  onChange={handleTitleAddT_number} type="text" placeholder="введине #" style={{'width':'100px'}} className="me-2" />


               <input  onChange={handleTitleinputChange} type="text" placeholder="введите наименование" />

                  <button onClick={handleClick}className="btn btn-light me-5">save</button>
              </div>
              {titleName}
              
              <div className="justify-content-end">
                  <button onClick={handleClickButtonCreateTitle} className="btn btn-light me-5">CreateNewTitle</button>
                  <button onClick={handleClickButtonPlus} className="btn btn-light me-5">CreateNewSubtitle</button>
                  <button className="btn btn-light">IN PROGRESS</button>
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
            
          

            {showH1 && <Subtitle  childCounter={counter}/>}
            {showH2 && <Title childCounter={counter}/>}
        </div>
        ):(
            <>
            <button onClick={handleClickCreate} className="btn btn-info me-5">+</button>
            </>
        )}

<h1>sldvnslvl</h1>
{allTitles.map((item)=>(
  // console.log('allTitles.t_number',item.t_number,item.name)
 
<div >
    <span> title number=  {item.t_number}   title name=  {item.name}, {item.id}</span>
    <Button style={{ width: '100%' }} color="dark" onClick={toggleAccordion}>
        
        <div className="d-flex justify-content-between">
            <div className="justify-content-start">
           
            {/* {showH2 && Number(counter)+1} */}
            <input  onChange={handleTitleAddT_number} type="text" placeholder={item.t_number} style={{'width':'100px'}} className="me-2" />


             <input  onChange={handleTitleinputChange} type="text" placeholder={item.name} />

                    {item.id}
                   <button onClick={() => updatehandleClick(item.id)}className="btn btn-light me-5">save</button> 
            </div>
            {titleName}
            
            <div className="justify-content-end">
                <button onClick={handleClickButtonCreateTitle} className="btn btn-light me-5">CreateNewTitle</button>
                <button onClick={handleClickButtonPlus} className="btn btn-light me-5">CreateNewSubtitle</button>
                <button className="btn btn-light">IN PROGRESS</button>
            </div>
        </div>
        </Button>


        {showH1 && <Subtitle  childCounter={counter}/>}
            {showH2 && <Title childCounter={counter}/>}
</div>
))}


       
        {/* <TreeView/> */}
        
        </>
        
        
    );
  }