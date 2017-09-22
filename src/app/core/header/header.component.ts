import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  successfulDataSave = '';

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        () => {
          this.successfulDataSave = 'Data Saved Successfully.';
          alert(this.successfulDataSave);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
