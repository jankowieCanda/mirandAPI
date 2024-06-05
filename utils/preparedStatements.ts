import { connection } from '../myDB';

export function sqlInsert(tableName: string, obj: any){
    let sqlString = `INSERT INTO \`${tableName}\`(` ;
    let valuesPrepared = 'VALUES (';
    let keysList = Object.keys(obj);
    let valuesList = Object.values(obj);
    let sign = '?'

    for(let i = 0; i < keysList.length; i++) {
        sqlString += `\`${keysList[i]}\``
        if(i != keysList.length -1) {
            sqlString += ',';
            valuesPrepared += sign + ',';
        } else {
            sqlString +=') '
            valuesPrepared += sign + ')';
        }
    };
    sqlString += `${valuesPrepared};`
    connection.execute(sqlString, valuesList, (err, result, fields) => {
        if (err instanceof Error) {
          console.log(err);
          return;
        }
      });
      connection.unprepare(sqlString);
}