import React from 'react';
import SocialItem from './SocialItem';
import WorkerItem from './WorkerList';

function Social(){
    return(
        <div class="container">
            <div class="row">
                <div class="col">
                <WorkerItem
                p={{
                    img:'https://picsum.photos/108',
                    name:'Abdelmajid Ghaiati',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:'a2mjidgh@gmail.com'
                }}
            /> 
                </div>
                <div class="col">
                <WorkerItem
                p={{
                    img:'https://picsum.photos/103',
                    name:'Hamid Lghamal',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:'a2mjidgh@gmail.com'
                }}
                /> 
                </div>
                <div class="col">
                <WorkerItem
                p={{
                    img:'https://picsum.photos/106',
                    name:'Joan L9ra3',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:''
                }}
                /> 
                </div>
            </div>
            <div class="row">
                <div class="col">
                <WorkerItem
                p={{
                    img:'https://picsum.photos/89',
                    name:'Mjid',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:'a2mjidgh@gmail.com'
                }}
                /> 
                </div>
                <div class="col">
                <WorkerItem
                p={{
                    img:'https://picsum.photos/9',
                    name:'Mjid',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:''
                }}
                /> 
                </div>
                <div class="col">
                <WorkerItem
                p={{
                    img:'https://picsum.photos/100',
                    name:'Mjid',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:'a2mjidgh@gmail.com'
                }}
                /> 
                </div>
            </div>
            </div>
            /*
        <ul className="list-group">
            <WorkerItem
                p={{
                    img:'https://picsum.photos/100',
                    name:'Mjid',
                    job:'Full Stack Developer',
                    phone:'+641490033',
                    email:'a2mjidgh@gmail.com'
                }}
            /> 
        </ul>*/
    );
}
export default Social;