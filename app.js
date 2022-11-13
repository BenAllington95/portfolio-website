
import {projects, array} from './data.js';

document.addEventListener('click', function(e) {

    if (e.target.dataset.links) {
        const sectionButton = document.getElementsByClassName('section-button')
        for (let button of sectionButton){
            button.classList.remove('active')
        }
        document.getElementById(e.target.id).classList.add('active') 
        renderHtmlString(e.target.dataset.links)
    }
}) 

// document to find any clicks within the body, but only if condition is met through e.target.dataset
// sectionButton will locate all of the class elements with section-button
// a loop will be run to remove the class 'active' and add it the the clicked target event 
// renderHtmlString is run to match the clicked event with the html string from the object array 'array'

 function getHtmlStringFromObject(e) {
    const targetObj = array.filter(function(item){
        return e === item.category
    })[0]

   return targetObj.htmlString

} // Uses filter to locate the matching category's html string from array object in data.js



export function getProjectHtmlString() {
    
    let string = ""

    projects.forEach(function(project) {

        string += `
            <a href="${project.link}" target="_blank"><div class="project">
                    <img class="project-image" src="${project.image}">
                    <div class="project-name">
                       <h3 class="project-h3">${project.name}</h3>
                    </div>
            </div></a>`

    })

    return string

} // forEach to loop a string that contains all of the projects in the data.js array called 'projects'
    // function is called in 'array' 

function renderHtmlString(e) {

    if (e === 'projects' || 'about' || 'contact') {
        document.getElementById('about-feed').innerHTML = getHtmlStringFromObject(e)
    }
}   // renders the string when one of the conditions are called, innerhtml to call function


function renderAboutTab() {
    document.getElementById('about-feed').innerHTML = array[0].htmlString
}

renderAboutTab()


