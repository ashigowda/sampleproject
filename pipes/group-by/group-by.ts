import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {

  transform(prescriptionList: any, date: string) {

    const newPrescriptionList: any[] = [];
    const groupedElements: any = {};

    prescriptionList.forEach((obj: any) => {
      let date1 = new Date(obj[date]).toLocaleDateString()

      //grouping items by date
      if (!(date1 in groupedElements)) {
        groupedElements[date1] = [];
      }
      groupedElements[date1].push(obj);
    });

    for (let createdAt in groupedElements) {
      if (groupedElements.hasOwnProperty(createdAt)) {
        newPrescriptionList.push({
          key: createdAt,
          list: groupedElements[createdAt]
        });
      }
    }

    return newPrescriptionList;
  }
}
