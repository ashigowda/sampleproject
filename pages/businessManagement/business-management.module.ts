import { NgModule } from '@angular/core';
import { clinicSettingsModule } from "./clinic-settings/clinic-settings.module";
import { businessManagementModule } from "./business-management/business-management.module";
import { clinicSettingsEditModule } from "./clinic-settings-edit/clinic-settings-edit.module";
import { staffAddModule } from "./staff-add/staff-add.module";
import { staffDetailsModule } from "./staff-Details/staff-Details.module";
import { StaffListModule } from "./staff-list/staff-list.module";
import { staffEditModule } from "./staff-edit/staff-edit.module";
import { openinghoursAddModule } from './openingHours-add/openingHours-add.module';
import { openinghoursEditModule } from './openinghours-edit/openinghours-edit.module';
import { openingHoursListModule } from './openingHours-list/openingHours-list.module';

@NgModule({
    declarations: [

    ],
    imports: [
        clinicSettingsModule, businessManagementModule, clinicSettingsEditModule, staffAddModule, staffDetailsModule,
        StaffListModule,openinghoursAddModule,openinghoursEditModule, staffEditModule,openingHoursListModule
    ],
})

export class BusinessManagementModule { }