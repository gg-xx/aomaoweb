<template>
  <section>
    <!--加入面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <!--加入查询列-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;" >
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input placeholder="商品名称" v-model="filters.productName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--数据列表-->
    <el-table :data="productData" stripe style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="productId" label="商品编号" width="180"></el-table-column>
      <el-table-column prop="productName" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="productNumber" label="商品数量" width="180"></el-table-column>
      <el-table-column prop="productPrice" label="商品价格" width="180"></el-table-column>
      <el-table-column prop="productDetail" label="商品描述" width="180"></el-table-column>
      <el-table-column label="操作" width="550">
				<template  slot-scope="scope">
					<el-button type="danger" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="size" :total="total"></el-pagination>

  <!--新增界面-->
		<el-dialog title="新增"  :visible.sync="addFormVisible" :close-on-click-modal="false">

		 <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="商品编号" prop="productName" >
					<el-input v-model="addForm.productId" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="商品名称" prop="productName" >
					<el-input v-model="addForm.productName" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="商品数量" prop="productName" >
					<el-input v-model="addForm.productNumber" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="商品价格" prop="productName" >
					<el-input v-model="addForm.productPrice" auto-complete="off"></el-input>
				</el-form-item>
                 <el-form-item label="商品描述" prop="productName" >
					<el-input v-model="addForm.productDetail" auto-complete="off"></el-input>
				</el-form-item>
	 </el-form>

			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>

		</el-dialog>
    	<!--修改编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="商品编号" prop="productName" >
					<el-input v-model="editForm.productId" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="商品名称" prop="productName" >
					<el-input v-model="editForm.productName" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="商品数量" prop="productName" >
					<el-input v-model="editForm.productNumber" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="商品价格" prop="productName" >
					<el-input v-model="editForm.productPrice" auto-complete="off"></el-input>
				</el-form-item>
                 <el-form-item label="商品描述" prop="productName" >
					<el-input v-model="editForm.productDetail" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
  </section>
</template>

<script>
// import axios from 'axios'
import {getProductList,addProduct,editProduct,removeProduct} from '../api/api'
export default {
  data() {
    return {
      current:1,
      size:5, //每页显示条数
      total:0,
      addFormVisible:false,
      editFormVisible:false,
      filters: {
          productName:''
      },
      //新增界面数据
        addForm: {
            productName: ''
        },
      //校验信息
        addFormRules: {
            productName: [
                { required: true, message: '请输入商品类别', trigger: 'blur' }
            ]
        },
        editForm:{}, //编辑修改窗体
        editFormRules: {
            productName: [
                { required: true, message: '请输入商品类别', trigger: 'blur' }
            ]
        },
      productData: [

      ]
    };
  },
  methods: {
    addSubmit: function(){

      this.$refs.addForm.validate((valid) => {
					if (valid) {

						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
               let para = Object.assign({}, this.addForm);
						  addProduct(para).then((res) => {
								this.addLoading = false;
                //NProgress.done();
                //弹出消息框
								this.$message({
									message: '提交成功',
									type: 'success'
                });
                //重置表单元素
                this.$refs['addForm'].resetFields();
                //隐藏对话框
                this.addFormVisible = false;

								this.getData();
							});
						});
					}
				});
    },
    editSubmit: function(){
	    this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
              let para = Object.assign({}, this.editForm);
              console.log(para);
							editProduct(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getData();
							});
						});
					}
				});
    },
    handleAdd: function(){
      //alert('进入添加页面');
      this.addFormVisible=true;
      //初始化
      this.addForm = {
					productName: ''
        };
    },
    handleQuery: function(){
      this.getData();
    },
    handleEdit: function(index, row){

      this.editFormVisible=true;
      this.editForm = Object.assign({}, row);
    },
    //删除
   handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeProduct(row.id).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
    	handleCurrentChange(val) {
        this.current=val;
				this.getData();
			},
    getData: function(){
      //let params=this.filters.productName;
      	let para = {
				  page: this.page,
					current:this.current,
					size:this.size,
					productName: this.filters.productName
				};
      //alert(JSON.stringify(params));
    //发起ajax 使用axios模块发起请求
     getProductList(para)
          .then(response => {
            console.log(response);
            this.total = response.data.data.total;
            this.productData=response.data.data.list;
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
    }
  },
  mounted(){
    this.getData();
  }
};
</script>

<style scoped>
</style>
