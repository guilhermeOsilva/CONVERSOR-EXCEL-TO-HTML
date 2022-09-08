class Processor {
  static Process(data) {
    var rows = data.split("\r\n");
    var arrs = [];
    console.log(rows);
    rows.forEach((row) => {
      var arr = row.split(",");
      arrs.push(arr);
    });

    return arrs;
  }
}

module.exports = Processor;
