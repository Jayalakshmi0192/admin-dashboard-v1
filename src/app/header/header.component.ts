import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// user defined event creation 
// for sharing from child to parent use output decorrator : @output() infront of new object 
  @Output()  onmenubtnClick = new EventEmitter()

  menubtnClicked(){
    // to occur a userdefined event,use emit method

  this.onmenubtnClick.emit()
// onmenubtnClick nammal parent ilek share cheyn pokuva for that we use output decorator.
 
// to resize screen ; ahh chart oke responsive aakaan vendii
 setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  )
 },100);
}

  }

