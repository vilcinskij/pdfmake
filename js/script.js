var docInfo = {
    info: {
        title: 'tested PDF',
        author: 'vilcinskij.com',
        subject: 'subject',
        keywords: 'words'
    },
    pageSize: 'A4',
    pageMargins: [50, 50, 30, 60],
    header: function (currentPage, pageCount) {
        return {
            text: currentPage.toString() + 'from' + pageCount,
            alignment: 'right',
            margin: [0, 30, 10, 50]
        }
    },
    footer: [
        {
            text: 'нижний колонтитул',
            alignment: 'center'
        }
    ],
    content: [
        {
            text: 'ТЕКСТ ПАРАГРАФА'
        }
    ]
}

// pdfMake.createPdf(docInfo).download('CMR.pdf')