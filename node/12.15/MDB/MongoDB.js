/**
 * 
 * 表与表之间的关系：
 *      所有的关系型数据库都需要通过sql语言来操作
 *      所有的关系型数据库在操作之前都需要设计表的结构
 *      数据库表还支持约束
 * ManogoDB 是最长的，最像关系型数据库的菲关系型数据库
 *      不需要设计表的结构
 */

/**
 * 查看版本号：mongod --version
 * 启动和关闭数据库：
 *      启动：mongod +回车（默认使用C盘），在使用该命令之前手动新建一个/data/db
 *           mongod +回车
 *              想要修改默认的数据存储路径：mongod --dbpath=
 *      停止：在开启服务的控制台，直接ctrl+c即可
 * 
 * 如何连接数据库？mongo+回车
 * 退出连接：exit
 * 
 * 基本命令：
 *      show dbs-->查看现实所有数据库
 *      use 数据库名称-->切换到指定的数据库,如果没有的话可以新建
 *      db -->查看当前操作的数据库
 *      db.students.insertOne({"name":"papap"})-->插入数据
 *          show collection
 *          db.students.find() 
 * 
 * 通过node.js操作
 */