/**
 * @page HomePage
 * @summary Welcome page for Alexandre Pet Care
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-primary-600 mb-4">Alexandre Pet Care</h1>
        <p className="text-xl text-gray-600 mb-8">
          Um pet shop completo dedicado ao bem-estar e cuidado dos animais de estimação
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 mb-2">Serviços Especializados</h3>
            <p className="text-gray-600">Banho, tosa e atendimento especializado para seu pet</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 mb-2">Produtos de Qualidade</h3>
            <p className="text-gray-600">Alimentação balanceada, acessórios e muito mais</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 mb-2">Ambiente Seguro</h3>
            <p className="text-gray-600">Espaço acolhedor e seguro para seu animal de estimação</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 mb-2">
              Atendimento Personalizado
            </h3>
            <p className="text-gray-600">Cuidado individualizado para cada pet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
