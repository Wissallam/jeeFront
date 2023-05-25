import {Component, OnInit} from '@angular/core';
import {Product} from "../../../controller/model/product.model";
import {ProductService} from "../../../controller/service/product.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit{


  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  name_imagproduct!: string;
  _url: string=environment.baseUrl+'product';
  imageName: any;

  //Gets called when the user selects an image

  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
  }

  public save(): void{
    this.productService.save().subscribe(data =>{
      if(data != null){
        alert("okey seccucc");
      }else
        alert('no');
    });
  }

  public is_ok(){
    console.log(this.product);
  }
  constructor(private productService : ProductService,private httpClient:HttpClient ) {
  }

  get product(): Product {
    return this.productService.product;
  }

  get list_products(): Array<Product> {
    return this.productService.list_products;
  }

  set product(value: Product) {
    this.productService.product = value;
  }
  set list_products(value: Array<Product>) {
    this.productService.list_products = value;
  }


  sendProduct() {
    console.log(this.product);
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    this.name_imagproduct=this.selectedFile.name;
    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(this._url, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  /*getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }*/


}
