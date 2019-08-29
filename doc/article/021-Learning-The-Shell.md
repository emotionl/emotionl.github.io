# Learning-The-Shell

## What Is the shell 什么是脚本

| **命令** | **EN**                                       | **ZH** |
| ------ | ------------------------------------------------ | ------ |
| `date` | Displays the current time and date. | 显示当前日期 |
| `cal` | Displays a calendar of thecurrent month. | 显示日历 |
| `df` | Disk free | 剩余磁盘 |
| `free` | Display the amount of free memor | 剩余内存 |
| `exit` | Ending a Terminal Session. | 关闭一个命令行会话 |

## Navigation 导航

| **命令** | **EN**                                   | **ZH**         |
| -------- | ---------------------------------------- | -------------- |
| `pwd`    | Print name of current working directory. | 显示当前文件夹 |
| `cd`     | Change directory.                        | 切换文件夹     |
| `ls`     | List directory contents.                 | 显示文件夹内容 |

## Exploring the System 探索系统

| **命令** | **EN**                                   | **ZH**         |
| -------- | ---------------------------------------- | -------------- |
| `ls`     | List directory contents.                 | 显示文件夹内容 |
| `file`   | Determining a File’s Type                | 查看文件类型   |
| `less`   | Viewing File Contents                    | 查看文件内容   |

## Manipulating Files and Directories 操作文件和目录

| **命令** | **EN**                            | **ZH**                  |
| -------- | --------------------------------- | ----------------------- |
| `cp`     | Copy files and directories        | 拷贝文件和文件夹        |
| `mv`     | Move/rename files and directories | 移动/重命名文件和文件夹 |
| `mkdir`  | Create directories                | 创建文件夹              |
| `rm`     | Remove files and directories      | 删除文件和文件夹        |
| `ln`     | Create hard and symbolic links    | 创建硬链接和符号链接    |

### cp - Copy Files and Directories

| **命令** | **结果**                          |
| -------- | --------------------------------- |
| `cp file1 file2`     | 把 file1 拷贝到 file2 . 如果 file2 存在， 那么 file2 的内容被 file1 的内容覆盖 . 如果 file2 不存在，那么 创建 file2 ，并把 file1 的内容拷贝到 file2。 |
| `cp -i file1 file2`     | 与上一条命令相似，不同的是如果 file2 存在，那么 file2 被覆盖前会提示用户。 |
| `cp file1 file2 dir1`  | 把 file1 和 file2 拷贝进 dir1，前提是 dir1 一定要存在。 |
| `cp dir1/* dir2 `     | 使用通配符，把dir1的内容都拷贝进dir中，前提是 dir2 一定要存在。 |
| `cp -r dir1 dir2`     | 把 dir1 的内容拷贝进 dir2 ，如果 dir2 不存在，就新建 dir2，并把 dir1 的内容拷贝进 dir2 .如果 dir2 存在就把 dir1 这个文件夹整个拷贝进 dir2，成为 dir2 的子文件夹。 |

> `-i` 代表 ` interactive`交互的（会有提示问你要不要这样做）
>
> `-r` 代表 ` recursive`递归的（递归地复制目录及其内容）

###  mv - Move and Rename Files

| **命令** | **结果**                          |
| -------- | --------------------------------- |
| `mv file1 file2` | 把 file1 移动到 file2 .。如果 file2 存在， 那么 file2 的内容被 file1 的内容覆盖 .。如果 file2 不存在，那么 创建 file2 ，并把 file1 的内容拷贝到 file2，file1 不再存在。 |
| `mv -i file1 file2` | 与上一条命令相似，不同的是如果 file2 存在，那么 file2 被覆盖前会提示用户。 |
| `mv file1 file2 dir1` | 把 file1 和 file2 移动到 dir1，前提是 dir1 一定要存在。 |
| `mv dir1 dir2` | 如果 dir2 不存在, 创建 dir2 并把 dir1 的内容移动到 dir2 并删除 dir1.。如果 dir2 存在，把 dir1移动到 dir2，成为 dir2 的子文件夹。 |

### rm - Remove Files and Directories

| **命令** | **结果**                          |
| -------- | --------------------------------- |
| `rm file1` | 静默删除 file1。 |
| `rm -i file1` | 与上一条命令相似，不同的是 file2 被删除前会提示用户。 |
| `rm -r file1 dir1` | 把 file1 和 file2 移动到 dir1，前提是 dir1 一定要存在。 |
| `rm -rf file1 dir1` | 如果 dir2 不存在, 创建 dir2 并把 dir1 的内容移动到 dir2 并删除 dir1.。如果 dir2 存在，把 dir1移动到 dir2，成为 dir2 的子文件夹。 |
### rm - Remove Files and Directories

| **命令** | **结果**                          |
| -------- | --------------------------------- |
| `rm file1` | 静默删除 file1。 |
| `rm -i file1` | 与上一条命令类似，区别是在执行删除之前会提示用户确认。 |
| `rm -r file1 dir1` | 删除 file1 和 dir1 以及 dir1 中的内容 |
| `rm -rf file1 dir1` | 与上一条命令类似，但如果 file1 或 dir1 不存在，rm 将静默继续。|

> **注意**
>
> 类 Unix 的操作系统比如 Linux 是没有撤销删除命令的。
>
> 一旦你使用 `rm` 命令删除一些文件，它就不存在了。Linux 假定你很聪明并且知道你在做什么。
>
> 要特别小心使用通配符。 请考虑下面这个经典的例子。 比方说，你想在一个目录仅删除`HTML`文件。 为此，请键入以下内容：
>
> ```shell
> rm *.html
> ```
>
> 这是正确的，但如果你不小心在 `*` 和 `.html` 之间放置了一个空格
>
> ```shell
> rm * .html
> ```
>
> `rm` 命令将删除目录中的所有文件，然后抱怨没有名为`.html`的文件。
>
> 这里有一个实用的提示：每当你使用带有通配符的`rm`命令之前（除了仔细检查你的输入！），先用`ls`测试通配符。 这会让你看到即将被删除的文件。 然后按向上箭头调用该命令并用`rm`替换`ls`。

### ln - Create Links


#### Hard Links

```shell
ln file link 
```

#### Symbolic Links

```shell
ln -s item link`
```
#### 区别
![11](./../../assets/image/11.jpg)

由于硬链接是有着相同 inode 号仅文件名不同的文件，因此硬链接存在以下几点特性：

- 文件有相同的 inode 及 data block；
- 只能对已存在的文件进行创建；
- 不能交叉文件系统进行硬链接的创建；
- 不能对目录进行创建，只可对文件创建；
- 删除一个硬链接文件并不影响其他有相同 inode 号的文件。

软链接与硬链接不同，若文件用户数据块中存放的内容是另一文件的路径名的指向，则该文件就是软连接。软链接就是一个普通文件，只是数据块内容有点特殊。软链接有着自己的 inode 号以及用户数据块。因此软链接的创建与使用没有类似硬链接的诸多限制：

- 软链接有自己的文件属性及权限等；
- 可对不存在的文件或目录创建软链接；
- 软链接可交叉文件系统；
- 软链接可对文件或目录创建；
- 创建软链接时，链接计数 i_nlink 不会增加；
- 删除软链接并不影响被指向的文件，但若被指向的原文件被删除，则相关软连接被称为死链接（即 dangling link，若被指向路径文件被重新创建，死链接可恢复为正常的软链接）。

## todo Working With Commands 使用命令

## todo Redirection 重定向

## todo Seeing the World as the Shell Sees it 用脚本的方式解决问题

## todo Advanced Keyboard Tricks 高级键盘技巧/

## todo Permissions 权限

## todo Processes 进程

## todo The Environment 环境

## todo A Gentle Introduction to VIM 一个柔和的 VIM 介绍

## todo Customizing the Prompt 自定义提示


|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |

