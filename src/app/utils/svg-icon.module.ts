import { NgModule } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';
import { MaterialModule } from './material.module';
import { SVG_ICONS } from 'src/app/constants/general.constants';
import { CustomSvgIcon } from '../models/interfaces/custom-svg-icon.interface';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule
  ]
})
export class IconSvgModule  {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
      this.registerIcons();
  }

  registerIcons(){
    SVG_ICONS.forEach((item: CustomSvgIcon) => {
      this.matIconRegistry.addSvgIcon(
        item.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.getAssetsRelativePath(item.file))
      );
    });
  }

  getAssetsRelativePath(file: string){
    return `../../assets/svg/${file}`;
  }

}
