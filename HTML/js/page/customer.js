$(document).ready(function () {
    new CustomerJS();
    //dialogDetail = $(".m-dialog").dialog({
    //    autoOpen: false,
    //    fluid: true,
    //    minWidth: 700,
    //    resizable: true,
    //    position: ({ my: "center", at: "center", of: window, within: $(".customerdetail") }),
    //    modal: true,
    //})
})
/**
 * Class quan ly su kien cho trang CustomerJS
 * CreatedBy: abc (29/12/2020)
 * */
class CustomerJS extends BaseJS {
    constructor() {
        //ham khoi tao đc chạy đầu tiên
        super();
    }

    setDataUrl() {
        this.getDataUrl = "http://api.manhnv.net/api/customers";
    }

}
