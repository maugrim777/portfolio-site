import initTilt from './js/tilt';
import initSr from './js/sr';
import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();

let projectOrder = () => {
  let projectChangeLogs = Array.from(document.getElementsByClassName('project-wrapper__change_log')) 
  
  let projects=projectChangeLogs.map(log => log.parentElement.parentElement.parentElement)
  let children=projectChangeLogs.map(log => log.parentElement.childElementCount)
  console.log(children)
  console.log(projects)

  for (let i=0; i<projects.length; i++) {
    projects[i].style.order = 0 - children[i]
    console.log(projects[i].style.order, projects[i])
  }


}
projectOrder()