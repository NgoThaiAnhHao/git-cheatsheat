import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";

const color = orange[900];

const commands = [
  {
    title: "Terminal Commands",
    commands: [
      {
        command: "ls",
        description: "Xem list file/folder hiện tại",
      },
      {
        command: "ls <File>",
        description: "Xem list file/folder của <File>",
      },
      {
        command: "ls -a",
        description: "Xem list các file bị ẩn",
      },
      {
        command: "start .",
        description: "Mở file/folder hiện tại",
      },
      {
        command: "start <File>",
        description: "Mở file/folder",
      },
      {
        command: "pwd",
        description: "Đường dẫn hiện tại",
      },
      {
        command: "cd <File>",
        description: "Chuyển đến <File>",
      },
      {
        command: "cd ..",
        description: "Di chuyển lùi về thư mục cha",
      },
      {
        command: "touch <File>",
        description: "Tạo file",
      },
      {
        command: "mkdir <Folder>",
        description: "Tạo folder",
      },
      {
        command: "rm <File>",
        description: "Xóa file",
      },
      {
        command: "rmdir <Folder>",
        description: "Xóa folder",
      },
      {
        command: "rm -rf <Folder/File>",
        description: "Xóa file hoặc thư mục cùng toàn bộ nội dung bên trong",
      },
    ],
  },

  {
    title: "VIM Commands",
    commands: [
      {
        command: "vim <File>",
        description: "Mở file bằng Vim",
      },
      {
        command: "i",
        description: "Bắt đầu chế độ chỉnh sửa (Insert mode)",
      },
      {
        command: "Esc",
        description: "Thoát chế độ chỉnh sửa, quay về Normal mode",
      },
      {
        command: ":w",
        description: "Lưu file",
      },
      {
        command: ":q",
        description: "Thoát Vim",
      },
      {
        command: ":wq",
        description: "Lưu file và thoát Vim",
      },
      {
        command: ":q!",
        description: "Thoát mà không lưu các thay đổi chưa lưu",
      },
    ],
  },

  {
    title: "GIT Basic",
    commands: [
      {
        command: "git status",
        description: "Kiểm tra trạng thái working tree và staging area",
      },
      {
        command: "git log",
        description: "Xem lịch sử commit",
      },
      {
        command: "git log --oneline",
        description: "Xem lịch sử commit, mỗi commit hiển thị trên một dòng",
      },
      {
        command: "git init",
        description: "Khởi tạo Git repository",
      },
      {
        command: "git add <File>",
        description: "Đưa file đã chỉnh sửa vào staging area",
      },
      {
        command: "git add .",
        description:
          "Đưa các thay đổi trong thư mục hiện tại và thư mục con vào staging area",
      },
      {
        command: 'git commit -m "<YourMessage>"',
        description:
          "Tạo commit với commit message và lưu vào local repository",
      },
      {
        command: "git commit",
        description: "Mở trình soạn thảo mặc định để nhập commit message",
      },
      {
        command: "git commit -a -m <commit-message>",
        description:
          "Tự động stage các file đã được theo dõi có thay đổi, sau đó tạo commit",
      },
      {
        command: "git commit --amend",
        description:
          "Sửa commit gần nhất",
      },
      
    ],
  },

  {
    title: "GIT Config",
    commands: [
      {
        command: 'git config --global user.name "<YourName>"',
        description: "Cấu hình tên người dùng Git",
      },
      {
        command: 'git config --global user.email "<you@example.com>"',
        description: "Cấu hình email người dùng Git",
      },
      {
        command: "git config --global user.name",
        description: "Xem tên người dùng Git hiện tại",
      },
      {
        command: "git config --global user.email",
        description: "Xem email người dùng Git hiện tại",
      },
      {
        command: 'git config --global core.editor "code --wait"',
        description:
          "Cấu hình Visual Studio Code làm trình soạn thảo mặc định khi Git cần nhập nội dung văn bản",
      },
    ],
  },

  {
  title: "GIT Ignore",
  commands: [
    {
      command: ".DS_Store",
      description: "Bỏ qua file .DS_Store (thường chứa metadata của macOS)",
    },
    {
      command: "folderName/",
      description: "Bỏ qua toàn bộ thư mục folderName và nội dung bên trong",
    },
    {
      command: "*.log",
      description: "Bỏ qua tất cả file có đuôi .log",
    },
    {
      command: "*.env",
      description: "Bỏ qua tất cả file có đuôi .env",
    },
    {
      command: "node_modules/",
      description: "Bỏ qua thư mục chứa các package của Node.js",
    },
    {
      command: "dist/",
      description: "Bỏ qua thư mục chứa các file build đầu ra",
    },
  ],
},
{
  title: "GIT Branch",
  commands: [
    {
      command: "git branch",
      description: "Liệt kê các nhánh local hiện có",
    },
    {
      command: "git branch <branch-name>",
      description: "Tạo nhánh mới nhưng vẫn ở nhánh hiện tại",
    },
    {
      command: "git switch <branch-name>",
      description: "Chuyển sang nhánh đã tồn tại",
    },
    {
      command: "git switch -c <branch-name>",
      description: "Tạo nhánh mới và chuyển sang nhánh đó",
    },
    {
      command: "git branch -d <branch-name>",
      description: "Xóa nhánh local đã được merge",
    },
    {
      command: "git branch -D <branch-name>",
      description: "Ép xóa nhánh local, kể cả khi chưa được merge",
    },
    {
      command: "git branch -m <new-branch-name>",
      description: "Đổi tên nhánh hiện tại",
    },
    {
      command: "git branch -v",
      description: "Liệt kê các nhánh local kèm commit gần nhất",
    },
    {
      command: "git branch -a",
      description: "Liệt kê tất cả nhánh local và remote-tracking",
    },
  ],
},
{
  title: "GIT Merge",
  commands: [
    {
      command: "git switch <target-branch>",
      description: "Chuyển sang nhánh đích muốn nhận các thay đổi",
    },
    {
      command: "git merge <branch-name>",
      description: "Merge các thay đổi từ branch-name vào nhánh hiện tại",
    },
    {
      command: "git merge --abort",
      description: "Hủy quá trình merge đang xảy ra khi có conflict",
    },
  ],
},
{
  title: "GIT Diff",
  commands: [
    {
      command: "git diff",
      description:
        "Xem các thay đổi chưa được đưa vào Staging Area (unstaged changes)",
    },
    {
      command: "git diff HEAD",
      description:
        "Xem tất cả thay đổi chưa được commit so với commit hiện tại, gồm staged và unstaged",
    },
    {
      command: "git diff --staged",
      description:
        "Xem các thay đổi đã được đưa vào Staging Area nhưng chưa được commit",
    },
    {
      command: "git diff --cached",
      description:
        "Tương đương git diff --staged, xem các thay đổi đã staged so với commit hiện tại",
    },
    {
      command: "git diff HEAD -- <file-name>",
      description:
        "Xem tất cả thay đổi chưa commit của file so với commit hiện tại",
    },
    {
      command: "git diff --staged -- <file-name>",
      description:
        "Xem thay đổi đã staged của file so với commit hiện tại",
    },
    {
      command: "git diff -- <file-name>",
      description:
        "Chỉ xem thay đổi unstaged của file",
    },
    {
      command: "git diff <branch1>..<branch2>",
      description:
        "So sánh nội dung hai nhánh, hiển thị khác biệt giữa branch1 và branch2",
    },
    {
      command: "git diff <commit1>..<commit2>",
      description:
        "So sánh nội dung hai commit, hiển thị khác biệt giữa commit1 và commit2",
    },
    {
      command: "git diff --stat",
      description:
        "Hiển thị thống kê các file thay đổi và số dòng thêm, xóa",
    },
    {
      command: "git diff <commit1> <commit2>",
      description:
        "So sánh hai commit; cách viết tương đương với git diff <commit1>..<commit2>",
    },
  ],
},
{
  title: "GIT Stash",
  commands: [
    {
      command: "git stash",
      description:
        "Cất tạm các thay đổi tracked chưa commit trong Working Tree và Staging Area",
    },
    {
      command: "git stash -u",
      description:
        "Cất cả các file chưa được Git theo dõi (untracked files)",
    },
    {
      command: "git stash pop",
      description:
        "Áp dụng stash gần nhất vào code hiện tại và xóa stash đó nếu áp dụng thành công",
    },
    {
      command: "git stash apply",
      description:
        "Khôi phục stash gần nhất nhưng vẫn giữ stash trong danh sách",
    },
    {
      command: "git stash list",
      description: "Liệt kê các stash đã lưu",
    },
    {
      command: "git stash apply stash@{1}",
      description: "Áp dụng stash có chỉ số 1 mà vẫn giữ lại stash",
    },
    {
      command: "git stash drop stash@{1}",
      description: "Xóa stash có chỉ số 1",
    },
    {
      command: "git stash clear",
      description: "Xóa toàn bộ stash trong repository",
    },
  ],
},
{
  title: "GIT Checkout & Restore",
  commands: [
    {
      command: "git checkout <commit-hash>",
      description:
        "Chuyển HEAD đến commit cụ thể ở trạng thái detached HEAD",
    },
    {
      command: "git checkout -- <file>",
      description:
        "Khôi phục file từ index (thường là trạng thái đã staged), làm mất thay đổi unstaged của file",
    },
    {
      command: "git restore <file>",
      description:
        "Khôi phục file trong Working Tree từ Staging Area (index), loại bỏ thay đổi unstaged",
    },
    {
      command: "git restore --source HEAD -- <file>",
      description:
        "Khôi phục file về nội dung trong commit hiện tại, ghi đè thay đổi trong Working Tree",
    },
    {
      command: "git restore --source HEAD~1 -- <file>",
      description:
        "Khôi phục file theo nội dung ở commit cha trực tiếp của HEAD",
    },
    {
      command: "git restore --staged <file>",
      description:
        "Unstage file nhưng vẫn giữ nguyên thay đổi trong Working Tree",
    },
  ],
},
{
  title: "GIT Reset & Revert",
  commands: [
    {
      command: "git reset <commit-hash>",
      description:
        "Di chuyển nhánh hiện tại về commit chỉ định, giữ thay đổi trong Working Tree nhưng đưa index về trạng thái của commit đó",
    },
    {
      command: "git reset --soft <commit-hash>",
      description:
        "Di chuyển nhánh về commit chỉ định nhưng giữ nguyên Staging Area và Working Tree",
    },
    {
      command: "git reset --mixed <commit-hash>",
      description:
        "Di chuyển nhánh về commit chỉ định, bỏ trạng thái staged nhưng giữ thay đổi trong Working Tree (mặc định)",
    },
    {
      command: "git reset --hard <commit-hash>",
      description:
        "Di chuyển nhánh về commit chỉ định và loại bỏ thay đổi tracked trong Staging Area và Working Tree",
    },
    {
      command: "git reflog",
      description:
        "Xem lịch sử di chuyển của HEAD và các cập nhật tham chiếu gần đây",
    },
    {
      command: "git revert <commit-hash>",
      description:
        "Tạo commit mới để đảo ngược thay đổi của commit chỉ định mà không viết lại lịch sử commit",
    },
  ],
}
];

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: color,
            fontWeight: 500,
            mt: 5,
          }}
        >
          Git Cheat Sheet
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ mt: 5, alignItems: "flex-start", pb: 4 }}
        >
          {[0, 1, 2].map((column) => (
            <Grid key={column} size={column === 2 ? 12 : 6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {commands
                  .filter((section, index) => {
                    const fullWidthSections = [
                      "GIT Config",
                      "GIT Diff",
                      "GIT Checkout & Restore",
                      "GIT Reset & Revert",
                    ];
                    const columnOverrides: Record<string, number> = {
                      "GIT Ignore": 1,
                      "GIT Merge": 1,
                      "GIT Stash": 0,
                    };
                    return column === 2
                      ? fullWidthSections.includes(section.title)
                      : !fullWidthSections.includes(section.title) &&
                          (columnOverrides[section.title] ?? index % 2) ===
                            column;
                  })
                  .map((section) => (
              <Box
                key={section.title}
                sx={{
                  width: "100%",
                  backgroundColor: "#fffaf5",
                  border: "2px solid black",
                  borderRadius: "0.3rem",
                  padding: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    color: color,
                    fontWeight: "600",
                    fontSize: "1.2rem",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {section.title}
                </Typography>

                <Table
                  sx={{
                    tableLayout: "fixed",
                    margin: 1,
                    "& td": {
                      py: 0.75,
                      px: 1.5,
                    },

                    // Đường kẻ dọc giữa hai cột
                    "& td:first-of-type": {
                      width:
                        section.title === "GIT Config" ||
                        section.title === "GIT Branch"
                          ? "50%"
                          : "35%",
                      borderRight: "1px solid #bdbdbd",
                      fontFamily: "monospace",
                    },

                    // Bỏ đường kẻ ngang ở dòng cuối
                    "& tr:last-child td": {
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableBody>
                    {section.commands.map((item) => (
                      <TableRow key={item.command}>
                        <TableCell
                          className="roboto-slab"
                          sx={{
                            color: "#514941",
                          }}
                        >
                          {item.command}
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
