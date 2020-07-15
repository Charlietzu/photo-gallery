import { Component } from "@angular/core";
import { PhotoService } from "../services/photo.service";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  photos = this.photoService.photos;

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    console.log("teste");
    this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: "Photos",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          icon: "close",
          handler: () => {
            //Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
