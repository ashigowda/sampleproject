import { NgModule } from '@angular/core';
import { accountManagementModule } from "./account-management/account-management.module";
import { historyManagementModule } from "./history-management/history-management.module";
import { updateManagementModule } from "./update-management/update-management.module";
import { invoicesModule } from "./invoices/invoices.module";

@NgModule({
  declarations: [
  ],
  imports: [
   accountManagementModule,
   historyManagementModule,
   invoicesModule,
   updateManagementModule
  ],
})
export class SettingModule {}