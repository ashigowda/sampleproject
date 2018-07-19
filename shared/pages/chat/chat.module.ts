import { NgModule } from '@angular/core';
import { chatHistoryModule } from "./chat-history/chat-history.module";
import { chatDetailsModule } from "./chat-details/chat-details.module";
import { chatCreateModule } from "./chat-create/chat-create.module";
import { chatRegisterModule } from "./chat-register/chat-register.module";

@NgModule({
  declarations: [
 
  ],
  imports: [
    chatHistoryModule,
    chatDetailsModule,
    chatCreateModule,
    chatRegisterModule
  ],
})
export class chatModule {}