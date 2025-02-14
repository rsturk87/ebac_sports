import { useGetProdutosQuery } from '../store/produtosSlice'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos.</p>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
