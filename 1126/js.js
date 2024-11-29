// 트리 데이터를 정의합니다.
const treeData = [
    {
      text: "src",
      nodes: [
        { text: "index.js" },
        { text: "app.js" },
        { text: "styles", nodes: [
            { text: "main.css" },
            { text: "theme.css" }
        ]},
      ]
    },
    {
      text: "public",
      nodes: [
        { text: "index.html" },
        { text: "favicon.ico" }
      ]
    },
    {
      text: "README.md"
    },
  ];
  
  // 트리뷰 초기화
  $(function () {
    $('#file-tree').treeview({
      data: treeData,
      levels: 1, // 트리의 기본 확장 레벨
      showBorder: true, // 테두리 표시
      expandIcon: 'bi bi-chevron-right', // 확장 아이콘
      collapseIcon: 'bi bi-chevron-down', // 축소 아이콘
      emptyIcon: 'bi bi-file-earmark', // 빈 노드 아이콘
    });
  });
  