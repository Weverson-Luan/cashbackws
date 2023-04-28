/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';
import { formatToBRL } from 'brazilian-values';
import { format } from 'date-fns';

// components
import { Text } from '@components/text';

// assets
import CashSvg from '../../assets/icons-svg/cash.svg';
import CashExitSvg from '../../assets/icons-svg/cash-exit.svg';

// typings
import { ISpendingProps } from './index.d';

// styles
import {
    Container,
    WrapperLoading,
    Header,
    ContainerSpending,
    HeaderSpending,
    WrapperText,
    WrapperTextFooterDate,
    FlatList,
    TextNative,
    WrapperImageProfile,
    ImageProfile,
    WrapperValueAndDate,
    TextNativeValueAndDate,
    TextDescription,
    TextTitleDescription,
} from './styles';

const SpendingCard = ({ testID, data, ...res }: ISpendingProps) => {
    const theme = useTheme();
    return (
        //@ts-ignore
        <Container {...res} testID={testID}>
            {data.length > 0 && (
                <Header>
                    <Text
                        text="Meus Históricos"
                        fontFamily={'Poppins-Medium'}
                        color={theme.colors.gray_150}
                        size={17}
                        letterHeight={32}
                        marginTop={40}
                        align="left"
                    />
                </Header>
            )}

            {data.length > 0 ? (
                <FlatList
                    data={data}
                    keyExtractor={(item: any) => String(item.id)}
                    renderItem={({ item }: any) => (
                        <ContainerSpending activeOpacity={0.8}>
                            <HeaderSpending>
                                <Text
                                    text={`${String(item.category).substring(
                                        0,
                                        10,
                                    )} #${
                                        item?.accountNumber
                                            ? item.accountNumber < 9
                                                ? `0${item.accountNumber}`
                                                : item.accountNumber
                                            : ''
                                    }`}
                                    fontFamily={'Poppins-SemiBold'}
                                    color={theme.colors.neutral_25}
                                    size={14}
                                    letterHeight={26}
                                    align="left"
                                    width={100}
                                />

                                <TextNative color={theme.colors.neutral_25}>
                                    {item.type === 'receive'
                                        ? 'ENTRADA'
                                        : 'SAÍDA'}
                                </TextNative>
                                {item.type === 'outings' ? (
                                    <CashExitSvg width={22} height={22} />
                                ) : (
                                    <CashSvg width={22} height={22} />
                                )}
                            </HeaderSpending>

                            <WrapperText>
                                <WrapperImageProfile>
                                    <ImageProfile
                                        source={{
                                            uri: 'https://lh3.googleusercontent.com/a/AEdFTp4wEuBiuNUcieS-oL_C80vIwXMi6sUUrywskRG-=s288-p-rw-no',
                                        }}
                                    />
                                    <View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '86%',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                            }}>
                                            <Text
                                                text={'Nome:'}
                                                fontFamily={'Poppins-Medium'}
                                                color={theme.colors.gray_150}
                                                size={14}
                                                letterHeight={26}
                                                weight="400"
                                                align="left"
                                                width={25}
                                            />
                                            <Text
                                                text={'Weverson'}
                                                fontFamily={'Poppins-Regular'}
                                                color={theme.colors.gray_50}
                                                size={14}
                                                letterHeight={26}
                                                weight="400"
                                                align="left"
                                            />
                                        </View>

                                        <View
                                            style={{
                                                width: '86%',
                                                flexDirection: 'row',
                                                paddingLeft: 6,
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                            }}>
                                            <TextTitleDescription
                                                color={theme.colors.gray_150}>
                                                Descrição:
                                            </TextTitleDescription>

                                            <TextDescription
                                                color={theme.colors.gray_50}>
                                                {`${String(item.name).substring(
                                                    0,
                                                    16,
                                                )}${
                                                    String(item.name).length >
                                                    10
                                                        ? '...'
                                                        : ''
                                                }`}
                                            </TextDescription>
                                        </View>
                                    </View>
                                </WrapperImageProfile>
                                <WrapperTextFooterDate>
                                    <Text
                                        text={'valor:'}
                                        fontFamily={'Poppins-Medium'}
                                        color={theme.colors.gray_150}
                                        size={14}
                                        letterHeight={26}
                                        weight="400"
                                        align="left"
                                    />
                                    <Text
                                        text={'data criação'}
                                        fontFamily={'Poppins-Medium'}
                                        color={theme.colors.gray_150}
                                        size={14}
                                        letterHeight={26}
                                        weight="400"
                                        align="left"
                                    />
                                </WrapperTextFooterDate>
                            </WrapperText>

                            <WrapperValueAndDate>
                                <TextNativeValueAndDate
                                    color={theme.colors.gray_50}>
                                    {formatToBRL(item.amount)}
                                </TextNativeValueAndDate>
                                <TextNativeValueAndDate
                                    style={{ marginRight: 14 }}
                                    color={theme.colors.gray_50}>
                                    {format(new Date(item.date), 'Pp')}
                                </TextNativeValueAndDate>
                            </WrapperValueAndDate>
                        </ContainerSpending>
                    )}
                />
            ) : (
                <WrapperLoading>
                    <Text
                        text={'Você não possui registros'}
                        fontFamily={'Poppins-Medium'}
                        color={theme.colors.gray_150}
                        size={14}
                        letterHeight={26}
                        weight="400"
                        align="left"
                    />
                </WrapperLoading>
            )}
        </Container>
    );
};

/**
 * EXPORTS
 */
export { SpendingCard };
