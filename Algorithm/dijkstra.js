const n = 6;
const graph = new Array(n).fill().map((_) => new Array(n).fill(Infinity));
for (let i = 0; i < n; i++) graph[i][i] = 0;

const graph2 = new Array(n).fill(new Array(n).fill(Infinity));
// 위 graph2는 모든 배열이 같은 배열을 참조하고 있기 때문에 안됨
// [1][2]를 수정할 경우, [0][2],[2][2],[3][2] 모두 수정됨

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][k] + graph[k][j] < graph[i][j])
        // i -> k -> j, 즉 k를 거쳐가는 경로가 더 짧은 경우
        graph[i][j] = graph[i][k] + graph[k][j]; // 거쳐가는 것이 더 짧은 경로라는 의미이므로 갱신
    }
  }
}
