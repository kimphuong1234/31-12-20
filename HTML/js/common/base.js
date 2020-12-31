class BaseJS {
    constructor() {
        this.getDataUrl = null;
        this.setDataUrl();
        
        this.initEvents();
        this.loadData();
    }

    setDataUrl() {

    }

    initEvents() {
        var me = this;
        //sự kiện click thi nhấn vào thêm ms
        $('#btnAdd').click(function () {
            //Hiển thị dialog thông tin chi tiết:
            $('.dialog-detail').show();
            $('#txtCustomerCode').focus();
        })

        //Load lại dữ liệu khi ấn button Load
        $('#btnRefresh').click(function () {
            //Hiểnthị customer thông tin chi tiết sau khi Load data:
            $('#table').remove('tr');
            me.loadData();
            
        })

        //Ẩn form chi tiết khi ấn X:
        $('#btnX').click(function () {
            //Hiển thị customer thông tin chi tiết:
            $('.dialog-detail').hide();

        })

        //Ẩn form chi tiết khi ấn hủy:
        $('#btnCancel').click(function () {
            //Hiển thị customer thông tin chi tiết:
            $('.dialog-detail').hide();
            
        })

        //Thực hiện lưu dữ liệu khi ấn button LƯU trên form chi tiết
        $('#btnSave').click(function () {
            //Validate dữ liệu:

            //Thu thập thông tin dữ liệu được nhập -> buid thành object

            //Gọi service tương ứng thực hiện lưu dữ liệu:

            //Sau khi lưu thành công:
            //  + đưa ra thông báo thành công
            //  + ẩn form chi tiết
            //  + load lại dữ liệu

            //Hiển thị dialog thông tin chi tiết:
            $('.dialog-detail').hide();

        })

        // Hiển thị thông tin chi tiết khi nhấn đúp chuột chọn 1 dòng
        $('table tbody').on('dblclick', 'tr', function () {
            $('.dialog-detail').show();
        })

        $('#txtCustomerCode').blur(function () {
            $(this).addClass('border-red');
        })
    }
    /**
     * Load dữ liệu
     * CreatedBy: abc (29/12/2020)
     * */
    loadData() {
        // lấy thông tin các cột data:
        try {
            var columns = $('table thead th');
            var getDataUrl = this.getDataUrl;
            $.ajax({
                url: getDataUrl,
                method: "GET",

            }).done(function (res) {
                $.each(res, function (index, obj) {
                    var tr = $(`<tr></tr>`);
                    //lấy thông tin dữ liệu sẽ map tương ứng vs các cột
                    $.each(columns, function (index, th) {
                        var td = $(`<td><div><span></span></div></td>`);
                        var fieldName = $(th).attr('fieldname');
                        var value = obj[fieldName];
                        var formatType = $(th).attr('formatType');
                        switch (formatType) {
                            case "ddmmyyyy":
                                td.addClass("text-align-center");
                                value = formatDate(value);
                                break;
                            case "Money":
                                td.addClass("text-align-right");
                                value = formatMoney(value);
                                break;
                            default:
                        }
                        td.append(value);
                        $(tr).append(td);
                    })
                    //debugger;
                    $('table tbody').append(tr);

                })
            }).fail(function (res) {

            })
        } catch (e) 
        {
            //ghi log lỗi:
            console.log(e);
        }
        
    }
}

