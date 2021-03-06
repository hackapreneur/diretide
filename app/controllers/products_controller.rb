class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @products = Product.all
  end


  def show
  end

  def new
    @product = current_user.products.build
  end


  def create
    @product = current_user.products.build(product_params)
      if @product.save
        redirect_to @product, notice: 'Product was successfully created.'
      else
        render action: 'new'
      end
  end

  def edit
  end



  def update

      if @product.update(product_params)
        redirect_to @product, notice: 'Product was successfully updated.'
      else
        render action: 'edit'
      end

  end


  def destroy
    @product.destroy
      redirect_to products_url
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:description)
    end
end
